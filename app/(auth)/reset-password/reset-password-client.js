"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

import { AuthForm } from "@/components/auth/auth-form";
import { SubmitButton } from "@/components/custom/submit-button";
import { resetPass } from "../actions";

export default function ResetPasswordClient({ token }) {
  const router = useRouter();

  const [state, formAction] = useActionState(resetPass, {
    status: "idle",
  });

  useEffect(() => {
    if (state.status === "failed") {
      console.log("Failed");
      toast.error("Invalid or expired token");
    } else if (state.status === "invalid_data") {
      toast.error("Token is required");
    } else if (state.status === "success") {
      toast.success("Password updated successfully");
      //   router.push("/login");
    }
  }, [state.status, router]);

  const handleSubmit = (formData) => {
    formData.append("token", token);
    formAction(formData);
  };

  return (
    <>
      <AuthForm formType="resetpass" action={handleSubmit}>
        <SubmitButton>Update Password</SubmitButton>
        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="font-semibold text-gray-800 hover:underline dark:text-zinc-200"
          >
            Back to login
          </Link>
        </div>
      </AuthForm>
    </>
  );
}
