"use client";
import React from "react";
import { ConctactRequestWithSender } from "@/features/contacts/services/get-contact-requests";
import Image from "next/image";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { declineContactRequest } from "@/features/contacts/services/decline-contact-request";
import { acceptContactRequest } from "@/features/contacts/services/accept-contact-request";

interface ContactRequestParams {
  request: ConctactRequestWithSender;
}

const ContactRequestCard = ({ request }: ContactRequestParams) => {
  return (
    <div className="flex items-center justify-between">
      {/** Sender */}
      <div className="flex items-center space-x-2">
        <Image
          src={request?.sender?.image || "/images/user.webp"}
          alt="Avatar"
          className="rounded-full drop-shadow-md"
          width={50}
          height={50}
        />
        <Text variant="p" className="!text-textColors-primary">
          {request?.sender?.name}
        </Text>
      </div>
      {/** Accept & Decline Buttons */}
      <div className="flex items-center space-x-1">
        <Button
          variant="danger"
          onClick={() => {
            declineContactRequest(request?.id);
          }}
          textSize="sm"
        >
          Decline
        </Button>
        <Button
          onClick={() => {
            acceptContactRequest(request);
          }}
          variant="primary"
          textSize="sm"
        >
          Accept
        </Button>
      </div>
    </div>
  );
};

export default ContactRequestCard;
