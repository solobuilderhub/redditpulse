"use client";

import * as React from "react";
import { Command } from "lucide-react";

import { NavMain } from "@/components/custom/dashboard/nav-main";
import { NavSecondary } from "@/components/custom/dashboard/nav-secondary";
import { NavUser } from "@/components/custom/dashboard/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { data } from "./sidebar-data";
import { SheetTitle } from "@/components/ui/sheet";

export function AppSidebar({ user, ...props }) {
  const { isMobile } = useSidebar();
  return (
    <Sidebar variant="inset" {...props}>
      {isMobile && <SheetTitle className="sr-only">Menu</SheetTitle>}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Redditpulse</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>{user && <NavUser user={user} />}</SidebarFooter>
    </Sidebar>
  );
}
