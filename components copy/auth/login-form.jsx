// components/auth/login-form.jsx
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function LoginForm({ defaultEmail = "" }) {
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor="email"
        className="text-zinc-600 font-normal dark:text-zinc-400"
      >
        Email Address
      </Label>
      <Input
        id="email"
        name="email"
        className="bg-muted text-md md:text-sm"
        type="email"
        placeholder="user@mail.com"
        autoComplete="email"
        required
        defaultValue={defaultEmail}
      />
      <Label
        htmlFor="password"
        className="text-zinc-600 font-normal dark:text-zinc-400"
      >
        Password
      </Label>
      <Input
        id="password"
        name="password"
        className="bg-muted text-md md:text-sm"
        type="password"
        required
      />
    </div>
  );
}