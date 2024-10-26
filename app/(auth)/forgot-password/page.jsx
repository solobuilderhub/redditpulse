"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

import { AuthForm } from "@/components/auth/auth-form";
import { SubmitButton } from "@/components/custom/submit-button";

import { forgetPass } from "../actions";

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [state, formAction] = useActionState(forgetPass, {
    status: "idle",
  });

  useEffect(() => {
    if (state.status === "failed") {
      toast.error("Invalid credentials!");
    } else if (state.status === "invalid_data") {
      toast.error("Failed validating your submission!");
    } else if (state.status === "success") {
      toast.success("Password reset email sent successfully");
      router.push("/login");
    }
  }, [state.status, router]);

  const handleSubmit = (formData) => {
    setEmail(formData.get("email"));
    formAction(formData);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <div className="w-full max-w-md overflow-hidden rounded-2xl flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
          <h3 className="text-xl font-semibold dark:text-zinc-50">
            Lost your password?
          </h3>
          <p className="text-sm text-gray-500 dark:text-zinc-400">
            Use your email to resset your password
          </p>
        </div>
        <AuthForm
          formType="forgetpass"
          action={handleSubmit}
          defaultEmail={email}
        >
          <SubmitButton>Reset Password</SubmitButton>
          <div className="mt-6 text-center">
            <Link
              href="/login"
              className="font-semibold text-gray-800 hover:underline dark:text-zinc-200"
            >
              Back to login
            </Link>
            {" for free."}
          </div>
        </AuthForm>
      </div>
    </div>
  );
}
