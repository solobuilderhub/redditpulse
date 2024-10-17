"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/actions/authActions/logout";

function getUserInitials(name) {
  if (!name) return "?";
  const names = name.trim().split(" ");
  if (names.length === 1) return names[0].slice(0, 2).toUpperCase();
  return (names[0][0] + names[names.length - 1][0]).toUpperCase();
}

export function UserMenu({ user }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="p-2 hover:bg-transparent focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          aria-label="User menu"
        >
          <div className="flex size-8 shrink-0 select-none items-center justify-center rounded-full bg-orange-500 text-sm font-medium uppercase text-white transition-colors hover:bg-orange-600">
            {getUserInitials(user?.name)}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8} align="end" className="w-56">
        <DropdownMenuItem className="flex-col items-start" role="menuitem">
          <div className="font-medium">{user?.name}</div>
          <div className="text-xs text-zinc-500">{user?.email}</div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="focus:bg-orange-50" role="menuitem">
          Profile Settings
        </DropdownMenuItem>
        <form
          action={async () => {
            await logout();
          }}
        >
          <DropdownMenuItem role="menuitem">
            <button className="text-red-500 focus:text-red-500 focus:bg-red-50">
              Sign Out
            </button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
