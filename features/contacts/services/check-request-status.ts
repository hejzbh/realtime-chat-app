"use server";

import { db } from "@/lib/db";

export type ContactStatus = "inContact" | "requestSent" | "nothing";

export async function checkContactRequestStatus(
  userId1: string,
  userId2: string
): Promise<ContactStatus> {
  const inContact = await db.contact.findFirst({
    where: {
      userIds: {
        hasEvery: [userId1, userId2], // Checks if both user IDs are in the contact
      },
    },
  });

  // Users are already in contact.
  if (inContact) {
    return "inContact";
  }

  const requestSent = await db.contactRequest.findFirst({
    where: {
      OR: [
        { senderId: userId1, recieverId: userId2 },
        { senderId: userId2, recieverId: userId1 },
      ],
    },
  });

  // Request is already sent
  if (requestSent) {
    return "requestSent";
  }

  return "nothing";
}
