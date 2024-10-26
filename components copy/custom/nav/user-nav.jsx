// components/navbar/user-nav.tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function UserNav({ session }) {
  return session ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="py-1.5 px-2 h-fit font-normal" variant="secondary">
          {session.user?.email}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href="/dashboard" className="w-full">
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-1 z-50">
          <form
            className="w-full"
            action={async () => {
              "use server";
              await signOut({
                redirectTo: "/",
              });
            }}
          >
            <button
              type="submit"
              className="w-full text-left px-1 py-0.5 text-red-500"
            >
              Sign out
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Button className="py-1.5 px-2 h-fit font-normal text-white" asChild>
      <Link href="/login">Login</Link>
    </Button>
  );
}
