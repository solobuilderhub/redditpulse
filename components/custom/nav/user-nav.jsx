"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export function UserNav({ user }) {
  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="py-1.5 px-2 h-fit font-normal" variant="secondary">
          {user?.email}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href="/dashboard" className="w-full">
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <div
            className="w-full "
            onClick={() => {
              signOut({
                redirectTo: "/",
              });
            }}
          >
            <LogOut />
            Log out
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Button className="py-1.5 px-2 h-fit font-normal text-white" asChild>
      <Link href="/login">Login</Link>
    </Button>
  );
}
