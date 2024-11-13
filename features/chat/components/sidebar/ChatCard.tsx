"use client";
import { Chat } from "@prisma/client";
import React from "react";
import useChat from "../../hooks/use-chat";

interface ChatCardProps {
  className?: string;
  chat: Chat;
}

const ChatCard = ({ className = "", chat }: ChatCardProps) => {
  const { currentChatId } = useChat();

  return (
    <div
      className={`${className} ${currentChatId === chat?.id && "text-red-500"}`}
    >
      {chat?.id}
    </div>
  );
};

export default ChatCard;
