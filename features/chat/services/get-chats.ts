import { db } from "@/lib/db";
import { Chat, Message, User } from "@prisma/client";

export type ChatWithMessages = Chat & { messages: Message[]; users: User[] };

export const getChats = async (filter: "all-chats" | "recent-chats") => {
  try {
    let chats: Chat[] = [];

    // All chats
    if (filter === "all-chats") {
      chats = await db.chat.findMany({
        include: {
          users: true,
          messages: { take: 1 },
        },
      });
    }

    // Recent chats
    if (filter === "recent-chats") {
      chats = await db.chat.findMany({
        take: 4,
        orderBy: {
          lastMessageAt: "desc",
        },
        include: {
          users: true,
          messages: { take: 1 },
        },
      });
    }

    return chats as ChatWithMessages[];
  } catch (err: any) {
    throw new Error(
      err?.response?.data?.message || err.response?.data || err.message
    );
  }
};
