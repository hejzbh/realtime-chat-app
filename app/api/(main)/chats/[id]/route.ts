import errorStatus from "@/data/errorStatus";
import { NextResponse } from "next/server";

// Get chats
export async function GET(req: Request) {
  try {
    return NextResponse.json({});
  } catch (err: any) {
    return new NextResponse(err.message, {
      status: errorStatus.INTERNAL_SERVER_ERROR,
    });
  }
}
