import { db } from "@/lib/db";

import { NextResponse } from "next/server";
import errorStatus from "@/data/errorStatus";
import { hashPassword } from "@/features/auth/utils/passwords";
import capitalize from "@/utils/capitalize";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password, firstName, lastName, userName } = body;

    if (!email || !password)
      return new NextResponse("Missing Data", {
        status: errorStatus.MISSING_DATA,
      });

    const hashedPassword = await hashPassword(password);

    const user = await db.user.create({
      data: {
        email,
        name: capitalize(firstName) + " " + capitalize(lastName),
        username: userName.toLowerCase(),
        password: {
          create: {
            hash: hashedPassword,
          },
        },
      },
    });

    return NextResponse.json(user);
  } catch (err: any) {
    if (err?.meta?.target?.includes("email"))
      err.message = "User with same e-mail already exists!";

    if (err?.meta?.target?.includes("username"))
      err.message = "User with same username already exists!";

    return new NextResponse(err.message, {
      status: errorStatus.INTERNAL_SERVER_ERROR,
    });
  }
}
