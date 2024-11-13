import React, { useEffect, useState } from "react";
import {
  checkContactRequestStatus,
  ContactStatus,
} from "@/features/contacts/services/check-request-status";
import { sendContactRequest } from "@/features/contacts/services/send-contact-request";
import Button from "@/components/ui/Button";

interface ContactRequestButtonProps {
  currentUserId: string;
  strangerId: string;
}

const ContactRequestButton = ({
  currentUserId,
  strangerId,
}: ContactRequestButtonProps) => {
  const [loading, setLoading] = useState<boolean>();
  const [status, setStatus] = useState<ContactStatus>();

  useEffect(() => {
    if (!currentUserId || !strangerId) return;

    setLoading(true);
    checkContactRequestStatus({ userIds: [currentUserId, strangerId] })
      .then(setStatus)
      .finally(() => {
        setLoading(false);
      });
  }, [currentUserId, strangerId]);

  if (loading) return "Loading...";

  // onClick = ()=> { sentContact().then(()=>setStatus("requestSent")) }
  switch (status) {
    case "inContact":
      return <Button variant="danger">Remove contact</Button>;

    case "requestSent":
      return (
        <Button disabled variant="outline">
          Request Sent
        </Button>
      );
    case "nothing":
      return (
        <Button
          variant="primary"
          onClick={() => {
            sendContactRequest({
              senderId: currentUserId,
              recieverId: strangerId,
            }).then(() => {
              setStatus("requestSent");
            });
          }}
        >
          Add Contact
        </Button>
      );
    default:
      return null;
  }
};

export default ContactRequestButton;
