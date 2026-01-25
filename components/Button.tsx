import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-lg font-semibold transition-colors",
        variant === "primary"
          ? "bg-elvion-primary text-black hover:bg-elvion-accent"
          : "border border-white/20 text-white hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

