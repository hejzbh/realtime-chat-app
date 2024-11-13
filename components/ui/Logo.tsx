import React from "react";
import Image from "next/image";
import clsx from "@/utils/clsx";
import Link from "next/link";

export interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link className={className} href={"/"}>
      <Image
        src={"/images/logo.webp"}
        width={150}
        height={150}
        className={clsx("w-[60px] md:w-[150px]")}
        loading="lazy"
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
