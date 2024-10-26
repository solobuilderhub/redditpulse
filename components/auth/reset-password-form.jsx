// components/auth/reset-password-form.jsx
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function ResetPasswordForm() {
  return (
    <div className="space-y-4">
      <div>
        <Label
          htmlFor="password"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          New Password
        </Label>
        <Input
          className="mt-1 block w-full"
          id="password"
          type="password"
          name="password"
          placeholder="••••••••"
          required
          minLength={6}
        />
      </div>
    </div>
  );
}
