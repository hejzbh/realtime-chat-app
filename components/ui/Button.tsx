import React from "react";
import clsx from "@/utils/clsx";
import { textFontSizes, TextProps } from "./Text";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "danger" | "outline";
  type?: "button" | "submit";
  textSize?: TextProps["size"];
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  textSize = "base",
  className,
  disabled,
}) => {
  const buttonClasses = clsx(
    "px-4 py-2 font-[500] rounded transition-colors duration-200",
    textFontSizes[textSize],
    {
      "opacity-80": disabled,
    },
    {
      "bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
      "bg-gray-500 text-white hover:bg-gray-600": variant === "secondary",
      "bg-red-500 text-white hover:bg-red-600": variant === "danger",
      "bg-transparent text-textColors-primary hover:bg-gray-300":
        variant === "outline",
    },
    className
  );

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
