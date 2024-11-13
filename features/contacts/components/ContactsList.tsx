import React from "react";
import { ContactWithUsers, getContacts } from "../services/get-contacts";
import { ContactsPageSearchParams } from "@/app/(main)/contacts/page";
import ContactUserCard from "./ContactUserCard";
import NoResult from "@/components/ui/NoResult";

export interface ContactsListProps {
  className?: string;
  searchParams: ContactsPageSearchParams;
  userId: string;
}

const ContactsList = async ({
  className = "",
  searchParams,
  userId,
}: ContactsListProps) => {
  const contacts: ContactWithUsers[] = await getContacts({
    userId,
    q: searchParams?.q,
  });

  if (!contacts.length)
    return (
      <NoResult
        className={className}
        title="No Contacts Found"
        description={
          searchParams?.q
            ? "There are no contacts you are looking for"
            : "Send Contact Requests to other users"
        }
      />
    );

  return (
    <ul className={`${className}`}>
      {contacts?.map((contact) => (
        <li key={contact.id}>
          <ContactUserCard contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
