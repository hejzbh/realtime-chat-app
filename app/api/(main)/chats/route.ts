import errorStatus from "@/data/errorStatus";
import { useServerAuth } from "@/features/auth/hooks/use-server-auth";
import { db } from "@/lib/db";
import { Chat } from "@prisma/client";
import { NextResponse } from "next/server";

// Create new chat
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { userId, isGroup, members = [], name = "" } = body;

    const auth = await useServerAuth();

    if (!auth.currentUser)
      return new NextResponse("Unauthorized", {
        status: errorStatus.UNAUTHORIZED,
      });

    if (isGroup && (!members || members.length < 2 || !name))
      return new NextResponse("Missing data", {
        status: errorStatus.MISSING_DATA,
      });

    let chat: Chat;

    const existingChat = await db.chat.findFirst({
      where: {
        OR: [
          {
            userIds: {
              equals: [userId, auth?.currentUser?.id],
            },
          },
          {
            userIds: {
              equals: [auth?.currentUser?.id, userId],
            },
          },
        ],
      },
      include: {
        users: true,
      },
    });

    if (existingChat) {
      chat = existingChat;
    } else {
      chat = await db.chat.create({
        data: {
          name,
          type: isGroup ? "GROUP" : "ONE_TO_ONE",
          users: {
            connect: [
              { id: userId },
              { id: auth?.currentUser?.id },
              ...members?.map((member: any) => ({ id: member.id })),
            ],
          },
        },
        include: {
          users: true,
        },
      });
    }

    return NextResponse.json(chat);
  } catch (err: any) {
    return new NextResponse(err.message, {
      status: errorStatus.INTERNAL_SERVER_ERROR,
    });
  }
}
