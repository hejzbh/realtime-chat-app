import React from "react";
import BurgerMenu from "./BurgerMenu";
import Logo from "@/components/ui/Logo";

type MobileHeaderProps = {
  className?: string;
};

const MobileHeader = ({ className = "" }: MobileHeaderProps) => {
  return (
    <header className={`bg-purple-50 p-3 ${className}`}>
      <div className="flex items-center justify-between">
        <Logo />
        <BurgerMenu />
      </div>
    </header>
  );
};

export default MobileHeader;
