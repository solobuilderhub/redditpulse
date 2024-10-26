// components/navbar/navbar.tsx
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/app/(auth)/auth";
import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";
import { MobileNav } from "./mobile-nav";

export async function Navbar() {
  const session = await auth();

  return (
    <header className="bg-background fixed top-0 left-0 w-full py-2 px-3 flex items-center justify-between z-30">
      <div className="flex items-center gap-3">
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
      </div>

      <div className="flex items-center gap-4">
        <MainNav />
        <div className="hidden md:block">
          <UserNav session={session} />
        </div>
        <MobileNav session={session} />
      </div>
    </header>
  );
}
