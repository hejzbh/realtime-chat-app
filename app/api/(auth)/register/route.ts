import { db } from "@/lib/db";

import { NextResponse } from "next/server";
import errorStatuses from "@/data/errorStatuses";
import { hashPassword } from "@/features/auth/utils/passwords";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password, firstName, lastName, userName } = body;

    console.log(body);
    console.log("🐶🐶🐶🐶");

    if (!email || !password)
      return new NextResponse("Missing Data", {
        status: errorStatuses.MISSING_DATA,
      });

    const hashedPassword = await hashPassword(password);

    const user = await db.user.create({
      data: {
        email,
        fullName: firstName + " " + lastName,
        userName,
        password: {
          create: {
            hash: hashedPassword,
          },
        },
      },
    });

    return NextResponse.json(user);
  } catch (err: any) {
    return new NextResponse(err.message, {
      status: errorStatuses.INTERNAL_SERVER_ERROR,
    });
  }
}
