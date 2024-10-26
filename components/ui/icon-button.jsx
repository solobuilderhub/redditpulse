// components/ui/button-with-icon.jsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function IconButton({ children, className, ...props }) {
  return (
    <Button className={cn("gap-2", className)} {...props}>
      {children}
    </Button>
  );
}
