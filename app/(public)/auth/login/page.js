// pages/auth/login.jsx
import { auth } from "@/auth";
import LoginForm from "@/components/login-form";
import AuthWrapper from "../AuthWrapper";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <AuthWrapper>
      <LoginForm />
    </AuthWrapper>
  );
}
