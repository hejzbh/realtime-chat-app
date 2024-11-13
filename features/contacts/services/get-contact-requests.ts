"use server";

import { db } from "@/lib/db";
import { ContactRequest, User } from "@prisma/client";

export interface GetContactRequestParams {
  userId: string;
}

export type ConctactRequestWithSender = ContactRequest & { sender: User };

export const getContactRequests = async ({
  userId,
}: GetContactRequestParams) => {
  try {
    const contactRequests = await db.contactRequest.findMany({
      where: {
        recieverId: userId,
      },
      include: {
        sender: true,
      },
    });

    return contactRequests;
  } catch (err: any) {
    throw new Error(
      err?.response?.data?.message || err.response?.data || err.message
    );
  }
};
