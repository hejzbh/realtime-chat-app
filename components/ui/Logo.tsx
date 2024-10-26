import React from "react";
import Image from "next/image";
import clsx from "@/utils/clsx";

export interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Image
      src={"/images/logo.webp"}
      width={150}
      height={150}
      className={clsx(className)}
      loading="lazy"
      alt="Logo"
    />
  );
};

export default Logo;
