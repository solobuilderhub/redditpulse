import Form from "next/form";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";
import { ResetPasswordForm } from "./reset-password-form";
import { ForgotPasswordForm } from "./forgot-password-form";

export function AuthForm({
  formType = "login",
  action,
  children,
  defaultEmail = "",
}) {
  const formComponents = {
    login: LoginForm,
    register: RegisterForm,
    resetpass: ResetPasswordForm,
    forgetpass: ForgotPasswordForm,
  };

  const FormComponent = formComponents[formType];

  if (!FormComponent) {
    return null;
  }

  return (
    <Form action={action} className="flex flex-col gap-4 px-4 sm:px-16">
      <FormComponent defaultEmail={defaultEmail} />
      {children}
    </Form>
  );
}
