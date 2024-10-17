"use client";
import Link from "next/link";
import { Package2 } from "lucide-react";

const Sidebar = ({ title, children }) => {
  return (
    <div className="hidden border-r border-gray-200 bg-white shadow-sm md:block ">
      <div className="flex h-full max-h-screen flex-col">
        <div className="flex h-16 items-center border-b border-gray-200 px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
          >
            <Package2 className="h-6 w-6" />
            <span className="text-lg">{title}</span>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto py-4 px-3">{children}</div>
        <div className="border-t border-gray-200 p-4">
          <p className="text-sm text-gray-500">© 2023 Redditpulse</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
