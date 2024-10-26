import { PageHeader } from "@/components/custom/dashboard/page-header";
import { Summary } from "@/components/custom/dashboard/summary";
import { getUser } from "@/api/user-data";
import { auth } from "../(auth)/auth";

export default async function Page() {
  const [session] = await Promise.all([auth()]);
  const user = await getUser(session?.user?.email);

  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Summary", current: true },
  ];

  return (
    <div>
      <PageHeader items={breadcrumbItems} />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <Summary user={user} />
      </div>
    </div>
  );
}
