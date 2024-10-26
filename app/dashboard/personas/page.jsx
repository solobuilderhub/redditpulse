import { PageHeader } from "@/components/custom/dashboard/page-header";
import { auth } from "@/app/(auth)/auth";
import Link from "next/link";
import PersonaMain from "./components/persona-main";
import { PlusCircle } from "lucide-react";
import { getPersonas } from "@/api/personas";
import { IconButton } from "@/components/ui/icon-button";

export default async function PersonaPage() {
  const session = await auth();

  if (!session || !session.user) {
    return notFound();
  }

  const { data: personas, error } = await getPersonas(session.accessToken);

  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Personas", current: true },
  ];

  return (
    <div>
      <PageHeader items={breadcrumbItems} />
      <div className="flex flex-col min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-center h-16 border-b">
          <h1 className="font-semibold text-xl">Personas</h1>
          <div className="ml-auto">
            <Link href="/dashboard/personas/create">
              <IconButton>
                <PlusCircle className="h-4 w-4" />
                <span>Add New</span>
              </IconButton>
            </Link>
          </div>
        </header>
        <main className="flex-1 py-8">
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            <PersonaMain personas={personas} />
          )}
        </main>
      </div>
    </div>
  );
}
