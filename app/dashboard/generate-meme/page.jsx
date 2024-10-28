import { PageHeader } from "@/components/custom/dashboard/page-header";
import MemeGenerator from "./meme-generator";

export default function MemeGeneratorPage() {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Meme Generator", current: true },
  ];
  return (
    <>
      <PageHeader items={breadcrumbItems} />
      <div className="container mx-auto py-8">
        <MemeGenerator />
      </div>
    </>
  );
}
