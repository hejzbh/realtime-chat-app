import Title from "@/components/ui/Title";
import { Chat } from "@prisma/client";
import React from "react";
import ChatCard from "./ChatCard";

export interface AllChatsProps {
  className?: string;
  chats: Chat[];
}

const AllChats = ({ chats = [], className = "" }: AllChatsProps) => {
  // TODO: NoResults
  if (!chats?.length) return null;
  return (
    <div className={`${className}`}>
      <Title variant="h3" textSize="base">
        All Chats
      </Title>

      <ul>
        {chats?.map((chat) => (
          <li key={chat.id}>
            <ChatCard chat={chat} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllChats;
