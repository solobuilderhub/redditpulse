import { auth } from "@/auth";
import ResetPasswordForm from "@/components/reset-password-form";
import AuthWrapper from "../AuthWrapper";
import { redirect } from "next/navigation";

export default async function ResetPasswordPage({ searchParams }) {
  const session = await auth();
  const token = searchParams.token;

  if (session) {
    redirect("/dashboard");
  }

  if (!token) {
    redirect("/auth/login");
  }

  return (
    <AuthWrapper>
      <ResetPasswordForm token={token} />
    </AuthWrapper>
  );
}
