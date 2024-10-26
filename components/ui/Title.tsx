"use client";

import clsx from "@/utils/clsx";
import React from "react";

export interface TitleProps {
  className?: string;
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4";
  size?: "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

const Title = ({ className, variant, children, size = "2xl" }: TitleProps) => {
  const HeadingTag = variant;

  return (
    <HeadingTag
      className={clsx(className, "text-textColors-primary font-[700]", {
        "text-xs": size === "base",
        "text-lg": size === "lg",
        "text-xl": size === "xl",
        "text-2xl": size === "2xl",
        "text-3xl": size === "3xl",
        "text-4xl": size === "4xl",
        "text-5xl": size === "5xl",
      })}
    >
      {children}
    </HeadingTag>
  );
};

export default Title;
