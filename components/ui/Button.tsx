import React from "react";
import clsx from "@/utils/clsx";
import { textFontSizes, TextProps } from "./Text";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
  type?: "button" | "submit";
  textSize?: TextProps["size"];
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  textSize = "base",
  className,
}) => {
  const buttonClasses = clsx(
    "px-4 py-2 font-semibold rounded transition-colors duration-200",
    textFontSizes[textSize],
    {
      "bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
      "bg-gray-500 text-white hover:bg-gray-600": variant === "secondary",
      "bg-red-500 text-white hover:bg-red-600": variant === "danger",
    },
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
