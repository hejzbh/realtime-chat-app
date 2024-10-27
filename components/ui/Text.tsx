"use client";
import clsx from "@/utils/clsx";
import React from "react";

export interface TextProps {
  className?: string;
  variant?: "p" | "span";
  children: React.ReactNode;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

type FontSizeKeys =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

export const textFontSizes: Record<FontSizeKeys, string> = {
  xs: "text-[.6rem] sm:text-[.65rem] md:text-[.8rem]",
  sm: "text-[.7rem] sm:text-[.8rem] md:text-[.9rem]",
  base: "text-[.8rem] sm:text-[.9rem] md:text-[1rem]",
  lg: "text-[.9rem] sm:text-[1rem] md:text-[1.1rem]",
  xl: "text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem]",
  "2xl": "text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem]",
  "3xl": "text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] lg:text-[1.7rem]",
  "4xl": "text-[1.6rem] sm:text-[1.7rem] md:text-[1.8rem] lg:text-[1.9rem]",
  "5xl": "text-[1.8rem] sm:text-[1.9rem] md:text-[2rem] lg:text-[2.1rem]",
};

const Text = ({
  className = "",
  variant = "p",
  size = "base",
  children,
}: TextProps) => {
  const TextTag = variant;

  return (
    <TextTag
      className={clsx(
        "text-textColors-secondary",
        className,
        textFontSizes[size]
      )}
    >
      {children}
    </TextTag>
  );
};

export default Text;
