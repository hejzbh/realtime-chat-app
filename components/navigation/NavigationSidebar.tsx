import React from "react";
import dynamic from "next/dynamic";

const Logo = dynamic(() => import("@/components/ui/Logo"));
const NavigationLinks = dynamic(
  () => import("@/components/navigation/NavigationLinks")
);
const UserWidget = dynamic(() => import("@/components/navigation/UserWidget"));

export interface NavigationSidebarProps {
  className?: string;
}

const NavigationSidebar = ({ className = "" }: NavigationSidebarProps) => {
  return (
    <aside
      className={`p-3  h-full flex flex-col justify-between items-center border-r-2 bg-white border-borderColors-primary ${className}`}
    >
      <main>
        <Logo />
        <NavigationLinks />
      </main>
      <UserWidget />
    </aside>
  );
};

export default NavigationSidebar;
