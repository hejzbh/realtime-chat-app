import React from "react";
import { getChats } from "@/features/chat/services/get-chats";
import RecentChats from "./RecentChats";
import AllChats from "./AllChats";
import SidebarToolbar from "@/components/sidebar/SidebarToolbar";

interface ChatSidebarProps {
  className?: string;
}

const ChatSidebar = async ({ className = "" }: ChatSidebarProps) => {
  const [recentChats, allChats] = await Promise.all([
    getChats("recent-chats"),
    getChats("all-chats"),
  ]);

  return (
    <aside className={`bg-sidebar p-3 ${className}`}>
      <SidebarToolbar title="Chats" modalType="users" className="mb-5" />
      <RecentChats chats={recentChats} className="mb-5" />
      <AllChats chats={allChats} />
    </aside>
  );
};

export default ChatSidebar;
