import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const base = "px-4 py-2 rounded font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-900 hover:bg-gray-300";

  return (
    <button className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  );
};
