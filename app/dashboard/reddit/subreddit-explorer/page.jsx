import ClientOnly from "@/components/ClientOnly";
import SubredditExplorer from "../components/SubredditExplorer";
import { PageHeader } from "@/components/custom/dashboard/page-header";

export default function SubredditExplorerPage() {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Reddit", href: "/dashboard/reddit" },
    { label: "Explore", current: true },
  ];
  return (
    <>
      <PageHeader items={breadcrumbItems} />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <ClientOnly>
          <SubredditExplorer />
        </ClientOnly>
      </div>
    </>
  );
}
