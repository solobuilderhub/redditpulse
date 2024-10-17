// Header.jsx
import * as React from "react";
import Link from "next/link";
import { UserMenu } from "../user-menu";
import { Button } from "../ui/button";
import { auth } from "@/auth";
import Image from "next/image";
import { ClientHeader } from "./ClientHeader";

async function UserOrLogin() {
  const session = await auth();
  return (
    <>
      <Link href="/" className="flex items-center space-x-3">
        <Image
          src="/redditpulse-logo.png"
          alt="Redditpulse extension logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <span className="text-2xl font-extrabold text-gray-800 hidden sm:inline-block">
          Reddit<span className="text-orange-500">Pulse</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <Link
          href="#features"
          className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
        >
          Features
        </Link>
        <Link
          href="#pricing"
          className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
        >
          Pricing
        </Link>
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <div className="space-x-3">
            <Button
              variant="outline"
              asChild
              className="text-orange-500 border-orange-500 hover:bg-orange-50"
            >
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button
              asChild
              className="bg-orange-500 text-white hover:bg-orange-600"
            >
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export function Header() {
  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <React.Suspense fallback={<div className="flex-1" />}>
            <UserOrLogin />
          </React.Suspense>
          <ClientHeader />
        </div>
      </div>
    </header>
  );
}
