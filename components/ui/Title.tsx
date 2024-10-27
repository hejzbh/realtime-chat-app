"use client";

import clsx from "@/utils/clsx";
import React from "react";
import { textFontSizes, TextProps } from "./Text";

export interface TitleProps {
  className?: string;
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4";
  textSize?: TextProps["size"];
}

const Title = ({
  className,
  variant,
  children,
  textSize = "2xl",
}: TitleProps) => {
  const HeadingTag = variant;

  return (
    <HeadingTag
      className={clsx(
        className,
        "text-textColors-primary font-[700]",
        textFontSizes[textSize]
      )}
    >
      {children}
    </HeadingTag>
  );
};

export default Title;
