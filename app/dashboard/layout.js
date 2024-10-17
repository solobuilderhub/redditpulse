// app/dashboard/layout.jsx
import { auth } from "@/auth";
import AdminHeader from "@/components/main/admin/admin-header";
import AdminNav from "@/components/main/admin/admin-nav";
import Sidebar from "@/components/main/admin/sidebar";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
  const session = await auth();
  if (!session) {
    redirect("/auth/login");
  }
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        title="Redditpulse"
        className="hidden md:flex md:w-64 lg:w-72 bg-white shadow-md"
      >
        <AdminNav />
      </Sidebar>
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminHeader session={session}>
          <AdminNav />
        </AdminHeader>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
