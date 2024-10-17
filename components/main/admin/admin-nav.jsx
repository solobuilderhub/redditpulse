"use client";
import {
  Airplay,
  AtomIcon,
  Blocks,
  GalleryVerticalIcon,
  Home,
  ListIcon,
  NetworkIcon,
  SettingsIcon,
  TrainTrack,
  Search,
  Bookmark,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const dashboardLinks = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Personas", href: `/dashboard/personas`, icon: Blocks },
  { name: "Prompts", href: `/dashboard/prompts`, icon: Airplay },
  { name: "Add Persona", href: "/dashboard/personas/create", icon: ListIcon },
  {
    name: "Reddit",
    icon: NetworkIcon,
    subItems: [
      {
        name: "Subreddit Explorer",
        href: "/dashboard/reddit/subreddit-explorer",
        icon: Search,
      },
      {
        name: "Comment Tracker",
        href: "/dashboard/reddit/comment-tracker",
        icon: Home,
      },
      {
        name: "Managed Posts",
        href: "/dashboard/reddit/managed-posts",
        icon: Bookmark,
      },
    ],
  },
  { name: "AI Playground", href: "/dashboard/playground", icon: AtomIcon },
  {
    name: "Subscription",
    href: "/dashboard/subscription",
    icon: GalleryVerticalIcon,
  },
  // { name: "Account Settings", href: "/auth/settings", icon: SettingsIcon },
];

// const portalLinks = [
//   { name: "Portal", href: "/admin", icon: Home },
//   { name: "Restaurants", href: "/admin/playground", icon: ListIcon },
//   // { name: "Account Settings", href: "/auth/settings", icon: SettingsIcon },
// ];

const AdminNav = ({ admin }) => {
  const path = usePathname();
  const links = admin ? portalLinks : dashboardLinks;
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-1">
      {links.map((link, index) => {
        let isActive =
          link.href === path ||
          (link.subItems &&
            link.subItems.some((subItem) => subItem.href === path));
        let isExpanded = expandedItems[index];

        return (
          <div key={index} className="w-full">
            {link.subItems ? (
              <div>
                <button
                  onClick={() => toggleExpand(index)}
                  className={`flex items-center justify-between w-full gap-3 rounded-md px-3 py-2 transition-all duration-200 ease-in-out
                    ${
                      isActive
                        ? "bg-indigo-100 text-indigo-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <link.icon className="h-5 w-5" />
                    <span className="font-medium">{link.name}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </button>
                {link.subItems && isExpanded && (
                  <div className="ml-6 mt-1 space-y-1">
                    {link.subItems.map((subItem, subIndex) => {
                      let isSubItemActive = subItem.href === path;
                      return (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all duration-200 ease-in-out
                            ${
                              isSubItemActive
                                ? "bg-indigo-50 text-indigo-700"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                        >
                          <subItem.icon className="h-4 w-4" />
                          <span>{subItem.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={link.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2 transition-all duration-200 ease-in-out
                  ${
                    isActive
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <link.icon className="h-5 w-5" />
                <span className="font-medium">{link.name}</span>
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default AdminNav;
