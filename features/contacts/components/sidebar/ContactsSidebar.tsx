import React from "react";
import Title from "@/components/ui/Title";
import ContactsList from "@/features/contacts/components/ContactsList";

export interface ContactsSidebarProps {
  className?: string;
}

const ContactsSidebar = ({ className = "" }: ContactsSidebarProps) => {
  return (
    <aside className={`bg-white p-3 ${className}`}>
      <Title
        variant="h3"
        textSize="xl"
        className="text-textColors-primary font-[500]"
      >
        Contacts
      </Title>
      <ContactsList />
    </aside>
  );
};

export default ContactsSidebar;
