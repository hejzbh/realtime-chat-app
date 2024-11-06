import React from "react";
import ContactsList from "@/features/contacts/components/ContactsList";
import SidebarToolbar from "@/components/sidebar/SidebarToolbar";
import { ContactsPageSearchParams } from "@/app/(main)/contacts/page";

export interface ContactsSidebarProps {
  className?: string;
  searchParams: ContactsPageSearchParams;
}

const ContactsSidebar = async ({
  className = "",
  searchParams,
}: ContactsSidebarProps) => {
  return (
    <aside className={`bg-sidebar p-3 ${className}`}>
      <SidebarToolbar title="Contacts" modalType="users" includeSearch />
      <ContactsList />
    </aside>
  );
};

export default ContactsSidebar;
