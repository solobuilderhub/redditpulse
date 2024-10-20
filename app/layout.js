import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RedditPulse - Boost Your Reddit Engagement",
  description:
    "Generate AI-powered comments for Reddit and monitor subreddits with our powerful web extension.",
  icon: "/redditpulse-icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <GoogleAnalytics />
          {children}
        </Providers>
      </body>
    </html>
  );
}
