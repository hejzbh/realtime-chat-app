import Title from "@/components/ui/Title";
import React from "react";
import ChatCard from "./ChatCard";
import { ChatWithMessages } from "../../services/get-chats";

export interface RecentChatsProps {
  chats: ChatWithMessages[];
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
