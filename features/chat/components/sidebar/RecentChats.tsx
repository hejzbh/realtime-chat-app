import Title from "@/components/ui/Title";
import { Chat } from "@prisma/client";
import React from "react";
import ChatCard from "./ChatCard";

export interface RecentChatsProps {
  chats: Chat[];
  className?: string;
}

const RecentChats = ({ className = "", chats = [] }: RecentChatsProps) => {
  if (!chats?.length) return null;
  return (
    <div className={`${className}`}>
      <Title variant="h3" textSize="base">
        Recent Chats
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

export default RecentChats;
