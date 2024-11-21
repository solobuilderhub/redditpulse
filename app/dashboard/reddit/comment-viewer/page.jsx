"use client";

import ClientOnly from "@/components/ClientOnly";
import CommentViewer from "../components/CommentViewer";
import { PageHeader } from "@/components/custom/dashboard/page-header";

export default function CommentViewerPage() {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Reddit", href: "/dashboard/reddit" },
    { label: "Comments Viewer", current: true },
  ];
  return (
    <>
      <PageHeader items={breadcrumbItems} />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-8">Reddit Comment Viewer</h1>
        <ClientOnly>
          <CommentViewer />
        </ClientOnly>
      </div>
    </>
  );
}
