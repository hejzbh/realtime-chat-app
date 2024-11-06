import React, { useEffect, useState } from "react";
import {
  checkContactRequestStatus,
  ContactStatus,
} from "../../services/check-request-status";

interface ContactRequestButtonProps {
  currentUserId: string;
  strangerId: string;
}

const ContactRequestButton = ({
  strangerId,
  currentUserId,
}: ContactRequestButtonProps) => {
  const [loading, setLoading] = useState<boolean>();
  const [status, setStatus] = useState<ContactStatus>();

  useEffect(() => {
    if (!strangerId || !currentUserId) return;

    setLoading(true);
    checkContactRequestStatus(currentUserId, strangerId)
      .then(setStatus)
      .finally(() => {
        setLoading(false);
      });
  }, [strangerId, currentUserId]);

  if (loading) return "Loading...";

  switch (status) {
    case "inContact":
      return <div className="text-red-500">"Remove contact"</div>;
    case "requestSent":
      return <div className="text-red-500">"Request already sent"</div>;
    case "nothing":
      return <div className="text-red-500">"Add contact"</div>;
    default:
      return null;
  }
};

export default ContactRequestButton;
