import React from "react";

interface ContactRequestsListProps {
  className?: string;
}

const ContactRequestsList = ({ className = "" }: ContactRequestsListProps) => {
  return <div className={`${className}`}>ContactRequestsList</div>;
};

export default ContactRequestsList;
