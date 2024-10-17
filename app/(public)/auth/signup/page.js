import { auth } from "@/auth";
import SignupForm from "@/components/signup-form";
import { redirect } from "next/navigation";
import AuthWrapper from "../AuthWrapper";

export default async function SignupPage() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <AuthWrapper>
      <SignupForm />
    </AuthWrapper>
  );
}
