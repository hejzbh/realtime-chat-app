"use client";
import React from "react";
import useChat from "../../hooks/use-chat";
import { ChatWithMessages } from "../../services/get-chats";
import Avatar from "@/components/ui/Avatar";
import Text from "@/components/ui/Text";
import { useRouter } from "next/navigation";

interface ChatCardProps {
  className?: string;
  chat: ChatWithMessages;
}

const ChatCard = ({ className = "", chat }: ChatCardProps) => {
  const { currentChatId, recipientUser, hasSeenMessage, lastMessage } =
    useChat(chat);
  const router = useRouter();

  const handleClick = (chatId: string) => router.push(`/chat/${chatId}`);

  return (
    <div
      onClick={() => handleClick(chat.id)}
      className={`flex items-center space-x-3 border-[1px] border-gray-200 my-2 cursor-pointer p-3 rounded-xl transition hover:bg-gray-200 ${className} ${
        currentChatId === chat?.id && "bg-gray-200 "
      }`}
    >
      {/** Recipient */}
      <div>
        <Avatar imageURL={recipientUser?.image} />
      </div>
      {/** Title, Last Message & Date */}
      <div>
        <Text className="text-textColors-primary">
          {chat?.name || recipientUser?.name}
        </Text>
        <Text className="text-[#006ab0]">
          {lastMessage
            ? lastMessage?.type === "TEXT"
              ? lastMessage?.content || "Start a conversation "
              : "Sent a file"
            : "Start a conversation"}
        </Text>
      </div>
    </div>
  );
};

export default ChatCard;
