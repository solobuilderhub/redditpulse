import { Toaster } from "sonner";

import "./globals.css";
import Providers from "@/components/providers/Providers";

export const metadata = {
  metadataBase: new URL("https://redditpulse.solobuilder.com"),
  title: "RedditPulse - Boost Your Reddit Engagement",
  description:
    "Generate AI-powered comments for Reddit and monitor subreddits with our powerful web extension.",
  icon: "/redditpulse-icon.png",
};

export const viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
