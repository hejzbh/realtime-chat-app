"use server";

import { db } from "@/lib/db";
import { Contact, User } from "@prisma/client";

export type ContactWithUsers = Contact & {users:User[]}

export interface GetContactsParams {
  userId: string;
  q?: string;
}

export const getContacts = async ({ userId, q }: GetContactsParams) => {
  try {
    const contacts = await db.contact.findMany({
      where: {
        userIds: {
          hasSome: [userId],
        },
        // Search by name
        ...(q
          ? {
              users: {
                some: {
                  name: {
                    contains: q,
                    mode: "insensitive",
                  },
                },
              },
            }
          : {}),
      },
      include: {
        users: true,
      },
    });

    return contacts;
  } catch (err: any) {
    console.log(err);
    throw new Error(
      err?.response?.data?.message || err.response?.data || err.message
    );
  }
};
