import ClientOnly from "@/components/ClientOnly";
import ManagedPosts from "../components/ManagedPosts";
import { PageHeader } from "@/components/custom/dashboard/page-header";

export default function SubredditExplorerPage() {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Reddit", href: "/dashboard/reddit" },
    { label: "Manage Post", current: true },
  ];
  return (
    <>
      <PageHeader items={breadcrumbItems} />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <ClientOnly>
          <ManagedPosts />
        </ClientOnly>
      </div>
    </>
  );
}
