"use client";
import React from "react";
import { IconType } from "react-icons";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import clsx from "@/utils/clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavigationLinksProps {
  className?: string;
}

type NavigationLink = {
  name: string;
  href: string;
  Icon: IconType;
};

const navigationLinks: NavigationLink[] = [
  {
    name: "Chat",
    href: "/chat",
    Icon: IoChatbubbleEllipsesOutline,
  },
  {
    name: "Contacts",
    href: "/contacts",
    Icon: RiContactsLine,
  },
  {
    name: "Profile",
    href: "/profile",
    Icon: CgProfile,
  },
];

const NavigationLinks = ({ className = "" }: NavigationLinksProps) => {
  const pathname = usePathname();

  return (
    <ul className={`space-y-3 ${className}`}>
      {navigationLinks?.map((link) => {
        const { Icon, href, name } = link;
        const isActive = pathname?.startsWith(href);

        return (
          <li key={href}>
            <Link
              href={href}
              title={name}
              className={clsx(
                "flex items-center space-x-1 p-4 rounded-md hover:bg-main text-textColors-primary justify-center text-2xl hover:text-white transition-all duration-300 ease-in-out cursor-pointer",
                {
                  "drop-shadow-md bg-main !text-white": isActive,
                }
              )}
            >
              <Icon />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationLinks;
