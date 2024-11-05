import React from "react";

export interface ContactsListProps {
  className?: string;
}

const ContactsList = ({ className = "" }: ContactsListProps) => {
  return <div className={`${className}`}>ContactsList</div>;
};

export default ContactsList;
