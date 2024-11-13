import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import ContactsSidebar from "@/features/contacts/components/sidebar/ContactsSidebar";
import NavigationSidebar from "@/components/sidebar/NavigationSidebar";

const BurgerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent side="left" className="!p-0">
        <div className="grid grid-cols-[20%,80%] h-full">
          <NavigationSidebar />
          <div>
            <ContactsSidebar searchParams={{ q: "" }} className="w-full" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BurgerMenu;
