import Link from "next/link";

export function MainNav() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link
        href="#features"
        className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
      >
        Features
      </Link>
      <Link
        href="#pricing"
        className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
      >
        Pricing
      </Link>
    </nav>
  );
}
