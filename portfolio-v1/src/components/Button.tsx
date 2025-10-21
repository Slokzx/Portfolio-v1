import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  size?: "pill" | "sm" | "md" | "lg" | "xl";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  filled?: boolean;
  variant: "primary" | "secondary" | "outline" | "danger" | "pill";
  onClick: (e: React.FormEvent) => void;
};

const Button = ({
  children,
  size = "md",
  type = "button",
  disabled = false,
  className = "",
  variant = "primary",
  onClick,
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-3xl font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 w-fit";

  const variants: Record<string, string> = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-400 ",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 disabled:bg-gray-300",
    outline:
      "border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-400 disabled:opacity-50",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-400",
    pill: "rounded-full border border-[var(--color-primary)] bg-[rgba(15,98,254,0.08)] text-[var(--color-primary)] hover:bg-[rgba(15,98,254,0.38)]",
  };

  const sizes: Record<string, string> = {
    pill: "px-1 py-0.5 text-xs",
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? "cursor-not-allowed opacity-80" : ""
      } ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
