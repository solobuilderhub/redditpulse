// MobileMenu.jsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { UserMenu } from "../user-menu";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function MobileMenu() {
  const { data: session } = useSession();

  return (
    <div className="md:hidden">
      <MobileMenuContent session={session} />
    </div>
  );
}

function MobileMenuContent({ session }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex items-center">
        {session?.user && (
          <div className="mr-4">
            <UserMenu user={session.user} />
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="text-gray-600 hover:text-orange-500 focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 pb-4 space-y-4 bg-white shadow-lg rounded-b-lg">
          <Link
            href="#features"
            className="block px-6 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-colors"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="block px-6 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-colors"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          {!session?.user && (
            <div className="px-6 space-y-3">
              <Button
                variant="outline"
                className="w-full text-orange-500 border-orange-500 hover:bg-orange-50"
                asChild
              >
                <Link href="/auth/login" onClick={toggleMenu}>
                  Login
                </Link>
              </Button>
              <Button
                className="w-full bg-orange-500 text-white hover:bg-orange-600"
                asChild
              >
                <Link href="/auth/signup" onClick={toggleMenu}>
                  Sign Up
                </Link>
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
