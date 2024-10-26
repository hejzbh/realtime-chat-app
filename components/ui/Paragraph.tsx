"use client";
import clsx from "@/utils/clsx";
import React from "react";

export interface ParagraphProps {
  className?: string;
  variant?: "p" | "span";
  children: React.ReactNode;
  size?: "xs" | "sm" | "base" | "lg";
}

const Paragraph = ({
  className = "",
  variant = "p",
  size = "base",
  children,
}: ParagraphProps) => {
  const ParagrapahTag = variant;

  return (
    <ParagrapahTag
      className={clsx("text-textColors-secondary", className, {
        "text-xs": size === "xs",
        "text-sm": size === "sm",
        "text-base": size === "base",
        "text-lg": size === "lg",
      })}
    >
      {children}
    </ParagrapahTag>
  );
};

export default Paragraph;
