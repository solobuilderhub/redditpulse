import { TooltipProvider } from "@/components/ui/tooltip";
import { RedditProvider } from "./RedditContext";

export default function RedditLayout({ children }) {
  return (
    <RedditProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </RedditProvider>
  );
}
