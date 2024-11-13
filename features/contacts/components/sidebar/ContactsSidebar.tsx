import React from "react";
import ContactsList from "@/features/contacts/components/ContactsList";
import SidebarToolbar from "@/components/sidebar/SidebarToolbar";
import { ContactsPageSearchParams } from "@/app/(main)/contacts/page";
import ContactRequestsList from "@/features/contacts/components/contact-requests/ContactRequestsList";
import { useServerAuth } from "@/features/auth/hooks/use-server-auth";

export interface ContactsSidebarProps {
  className?: string;
  searchParams: ContactsPageSearchParams;
}

const ContactsSidebar = async ({
  className = "",
  searchParams,
}: ContactsSidebarProps) => {
  const auth = await useServerAuth();

  return (
    <aside className={`bg-sidebar p-3 ${className}`}>
      <SidebarToolbar title="Contacts" modalType="users" includeSearch />
      <ContactRequestsList userId={auth?.currentUser?.id} />
      <ContactsList
        searchParams={searchParams}
        userId={auth?.currentUser?.id}
        className="mt-5"
      />
    </aside>
  );
};

export default ContactsSidebar;
