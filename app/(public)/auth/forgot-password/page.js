import { auth } from "@/auth";
import ForgotPasswordForm from "@/components/forgot-password-form";
import AuthWrapper from "../AuthWrapper";
import { redirect } from "next/navigation";

export default async function ForgotPasswordPage() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <AuthWrapper>
      <ForgotPasswordForm />
    </AuthWrapper>
  );
}
