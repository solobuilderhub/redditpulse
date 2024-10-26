import { getPersonaById } from "@/api/personas";
import { PersonaForm } from "../components/persona-form";
import { auth } from "@/app/(auth)/auth";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/custom/dashboard/page-header";

const PersonaEditPage = async (props) => {
  const params = await props.params;
  const session = await auth();

  if (!session || !session.accessToken) {
    return notFound();
  }

  const { data, error } =
    (await getPersonaById(params.id, session.accessToken)) || undefined;
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-600">Persona not found</p>
        <span className="text-red-500">{error}</span>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Personas", href: "/dashboard/personas" },
    { label: "Edit", current: true },
  ];

  return (
    <>
      <PageHeader items={breadcrumbItems} />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="mb-8">
            <div className="flex items-center justify-between">
              <Link
                href="/dashboard/personas"
                className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Personas
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Edit Persona</h1>
            </div>
          </header>
          <main>
            <PersonaForm action="edit" item={data} />
          </main>
        </div>
      </div>
    </>
  );
};

export default PersonaEditPage;
