// components/navbar/mobile-nav.tsx
"use client";
import { LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { signOut } from "next-auth/react";

export function MobileNav({ user }) {
  return (
    <Sheet>
      <SheetTitle className="sr-only">Menu</SheetTitle>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <SheetClose asChild>
            <Link
              href="#features"
              className="block px-2 py-1 text-lg hover:text-orange-500"
            >
              Features
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="#pricing"
              className="block px-2 py-1 text-lg hover:text-orange-500"
            >
              Pricing
            </Link>
          </SheetClose>
          {user ? (
            <div className="space-y-3">
              <div className="px-2 py-1 text-sm text-gray-500">
                {user?.email}
              </div>
              <SheetClose asChild>
                <Link
                  href="/dashboard"
                  className="block px-2 py-1 text-lg hover:text-orange-500"
                >
                  Dashboard
                </Link>
              </SheetClose>
              <div
                className="w-full flex gap-3"
                onClick={() => {
                  signOut({
                    redirectTo: "/",
                  });
                }}
              >
                <LogOut />
                Log out
              </div>
            </div>
          ) : (
            <SheetClose asChild>
              <Link
                href="/login"
                className="block px-2 py-1 text-lg text-orange-500"
              >
                Login
              </Link>
            </SheetClose>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
