import ResetPasswordClient from "./reset-password-client";

export default async function ResetPage(props) {
  const searchParams = await props.searchParams;

  const token = searchParams.token;

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <div className="w-full max-w-md overflow-hidden rounded-2xl flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
          <h3 className="text-xl font-semibold dark:text-zinc-50">
            Reset Account
          </h3>
          <p className="text-sm text-gray-500 dark:text-zinc-400">
            Enter your new password below.
          </p>
        </div>
        <ResetPasswordClient token={token} />
      </div>
    </div>
  );
}
