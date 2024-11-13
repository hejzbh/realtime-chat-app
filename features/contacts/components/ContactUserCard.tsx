"use client";
import React, { useMemo } from "react";
import { ContactWithUsers } from "../services/get-contacts";
import { useAuth } from "@/features/auth/hooks/use-auth";
import Image from "next/image";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { FaRegTrashCan, FaMessage } from "react-icons/fa6";
import deleteContact from "@/features/contacts/services/delete-contact";
import { useRouter } from "next/navigation";
import { useNotifications } from "@/hooks/use-notifications";
import axios from "axios";
import { Chat } from "@prisma/client";

interface ContactUserCardProps {
  className?: string;
  contact: ContactWithUsers;
}

const ContactUserCard = ({ className = "", contact }: ContactUserCardProps) => {
  const { currentUser } = useAuth();
  const stranger = useMemo(
    () =>
      contact?.users?.find(
        (contactUser) => contactUser?.id !== currentUser?.id
      ),
    [contact?.users, currentUser?.id]
  );
  const router = useRouter();
  const { showNotification } = useNotifications();

  async function onChatClick() {
    try {
      await axios
        .post(`/api/chats`, { userId: stranger?.id })
        .then((response) => {
          const chat: Chat = response?.data;
          router.push(`/chat/${chat.id}`);
        });
    } catch (err: any) {
      showNotification({
        variant: "error",
        message: err.message,
        title: "ERROR",
      });
    }
  }

  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex items-center space-x-1">
        <Image
          src={stranger?.image || "/images/user.webp"}
          alt="Avatar"
          className="rounded-full drop-shadow-md"
          width={35}
          height={35}
        />
        <Text size="sm" className="!text-textColors-primary">
          {stranger?.name}
        </Text>
      </div>

      {/** Buttons */}
      <div className="flex items-center space-x-1">
        <Button onClick={onChatClick}>
          <FaMessage />
        </Button>
        <Button variant="danger" onClick={() => deleteContact(contact.id)}>
          <FaRegTrashCan />
        </Button>
      </div>
    </div>
  );
};

export default ContactUserCard;
