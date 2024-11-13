import React from "react";
import {
  ConctactRequestWithSender,
  getContactRequests,
} from "@/features/contacts/services/get-contact-requests";
import ContactRequestCard from "./ContactRequestCard";
import Title from "@/components/ui/Title";

interface ContactRequestsListProps {
  className?: string;
  userId: string;
}

const ContactRequestsList = async ({
  className = "",
  userId,
}: ContactRequestsListProps) => {
  const contactRequests: ConctactRequestWithSender[] = await getContactRequests(
    {
      userId,
    }
  );

  if (!contactRequests?.length) return null;

  return (
    <div className={`${className}`}>
      <Title variant="h3" textSize="base" className="mb-1">
        Contact Requests
      </Title>
      <ul>
        {contactRequests?.map((contactRequest) => (
          <li
            key={contactRequest.id}
            className="py-2 border-y-[1px] border-borderColors-primary"
          >
            <ContactRequestCard request={contactRequest} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactRequestsList;
