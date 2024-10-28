import { db } from "@/lib/db";

import { NextResponse } from "next/server";
import errorStatuses from "@/data/errorStatuses";
import { hashPassword } from "@/features/auth/utils/passwords";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password, firstName, lastName, userName } = body;

    if (!email || !password)
      return new NextResponse("Missing Data", {
        status: errorStatuses.MISSING_DATA,
      });

    const hashedPassword = await hashPassword(password);

    const user = await db.user.create({
      data: {
        email,
        name: firstName + " " + lastName,
        username: userName,
        password: {
          create: {
            hash: hashedPassword,
          },
        },
      },
    });

    console.log(user);

    return NextResponse.json(user);
  } catch (err: any) {
    if (err?.meta?.target?.includes("email"))
      err.message = "User with same e-mail already exists!";

    if (err?.meta?.target?.includes("username"))
      err.message = "User with same username already exists!";

    return new NextResponse(err.message, {
      status: errorStatuses.INTERNAL_SERVER_ERROR,
    });
  }
}
