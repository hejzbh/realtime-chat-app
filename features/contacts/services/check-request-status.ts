"use server";

import { db } from "@/lib/db";

export type ContactStatus = "inContact" | "requestSent" | "nothing";

export async function checkContactRequestStatus({
  userIds,
}: {
  userIds: string[];
}): Promise<ContactStatus> {
  const inContact = await db.contact.findFirst({
    where: {
      userIds: {
        hasEvery: userIds, // Checks if both user IDs are in the contact
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
        { senderId: userIds[0], recieverId: userIds[1] },
        { senderId: userIds[1], recieverId: userIds[0] },
      ],
    },
  });

  // Request is already sent
  if (requestSent) {
    return "requestSent";
  }

  return "nothing";
}
