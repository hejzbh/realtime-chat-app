"use client";
import React from "react";
import Title from "@/components/ui/Title";
import ContactsList from "@/features/contacts/components/ContactsList";
import { useModal } from "@/hooks/use-modal";

export interface ContactsSidebarProps {
  className?: string;
}

const ContactsSidebar = ({ className = "" }: ContactsSidebarProps) => {
  const { openModal } = useModal();

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
      <button onClick={() => openModal("users")}>Open</button>
    </aside>
  );
};

export default ContactsSidebar;
