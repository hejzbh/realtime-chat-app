import { db } from "@/lib/db";
import { Chat } from "@prisma/client";

export const getChats = async (filter: "all-chats" | "recent-chats") => {
  try {
    let chats: Chat[] = [];

    // All chats
    if (filter === "all-chats") {
      chats = await db.chat.findMany({
        take: 10,
        include: {
          users: true,
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
        },
      });
    }

    return chats;
  } catch (err: any) {
    console.error(err);
    throw new Error(
      err?.response?.data?.message || err.response?.data || err.message
    );
  }
};
