import React from "react";
import { getChats } from "@/features/chat/services/get-chats";
import Title from "@/components/ui/Title";
import RecentChats from "./RecentChats";
import AllChats from "./AllChats";

interface ChatSidebarProps {
  className?: string;
}

const ChatSidebar = async ({ className = "" }: ChatSidebarProps) => {
  const [recentChats, allChats] = await Promise.all([
    getChats("recent-chats"),
    getChats("all-chats"),
  ]);

  console.log(recentChats);
  console.log("🎇🎇🎇🎇");
  return (
    <aside className={`bg-white p-3 ${className}`}>
      <Title
        variant="h3"
        textSize="xl"
        className="text-textColors-primary font-[500]"
      >
        Chats
      </Title>
      <RecentChats />
      <AllChats />
    </aside>
  );
};

export default ChatSidebar;
