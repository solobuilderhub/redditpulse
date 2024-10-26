"use client";
import { forwardRef } from "react";
import { Button } from "./button";

const IconButton = forwardRef(
  ({ icon: Icon, children, size = "sm", className = "", ...props }, ref) => {
    return (
      <Button
        ref={ref} // Forward the ref to your Button component
        size={size}
        className={`h-8 gap-1 ${className}`}
        {...props}
      >
        {Icon && <Icon />} {/* Ensure Icon is rendered as a component */}
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          {children}
        </span>
      </Button>
    );
  }
);

// Set the displayName for better debugging and to satisfy ESLint
IconButton.displayName = "IconButton";

export default IconButton;
