import errorStatus from "@/data/errorStatus";
import { useServerAuth } from "@/features/auth/hooks/use-server-auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Get users
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const serverAuth = await useServerAuth();

    const users = await db.user.findMany({
      where: {
        OR: [
          {
            name: {
              contains: searchParams?.get("searchQuery") || "",
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: searchParams?.get("searchQuery") || "",
              mode: "insensitive",
            },
          },
        ],
        id: {
          not: serverAuth?.user?.id,
        },
      },
    });

    return NextResponse.json(users);
  } catch (err: any) {
    return new NextResponse(err.message, {
      status: errorStatus.INTERNAL_SERVER_ERROR,
    });
  }
}
