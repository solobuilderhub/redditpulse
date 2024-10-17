"use client";
import { Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { UserMenu } from "@/components/user-menu";

const AdminHeader = ({ children, session }) => {
  const user = session.user;

  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600 px-4 lg:px-6 text-white">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 md:hidden text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-600"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col bg-gray-50">
          {children} {/* Nav element */}
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1 flex justify-between items-center">
        <h1 className="text-xl font-semibold hidden md:block">Dashboard</h1>
        <UserMenu user={user} />
      </div>
    </header>
  );
};

export default AdminHeader;
