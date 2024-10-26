import { PageHeader } from "@/components/custom/dashboard/page-header";
import { auth } from "@/app/(auth)/auth";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { getPrompts } from "@/api/prompts";
import PromptMain from "./components/prompt-main";
import { IconButton } from "@/components/ui/icon-button";
import { notFound } from "next/navigation";

export default async function PersonaPage() {
  const session = await auth();

  if (!session || !session.user) {
    return notFound();
  }

  const { data: prompts, error } = await getPrompts(session.accessToken);

  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Prompts", current: true },
  ];

  return (
    <div>
      <PageHeader items={breadcrumbItems} />
      <div className="flex flex-col min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-center h-16 border-b">
          <h1 className="font-semibold text-xl">Prompts</h1>
          <div className="ml-auto">
            <Link href="/dashboard/prompts/create">
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
            <PromptMain prompts={prompts} />
          )}
        </main>
      </div>
    </div>
  );
}
