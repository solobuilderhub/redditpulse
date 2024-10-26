"use client";

import ClientOnly from "@/components/ClientOnly";
import CommentTracker from "../components/CommentTracker";
import { PageHeader } from "@/components/custom/dashboard/page-header";

export default function CommentTrackerPage() {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Reddit", href: "/dashboard/reddit" },
    { label: "Track Comments", current: true },
  ];
  return (
    <>
      <PageHeader items={breadcrumbItems} />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-8">Track Comments in One Place</h1>
        <ClientOnly>
          <CommentTracker />
        </ClientOnly>
      </div>
    </>
  );
}
