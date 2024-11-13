"use server";
import { db } from "@/lib/db";
import { ContactRequest } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const acceptContactRequest = async (request: ContactRequest) => {
  try {
    await Promise.all([
      // Delete contact request
      db.contactRequest.delete({ where: { id: request?.id } }),
      // Create contact
      db.contact.create({
        data: {
          users: {
            connect: [{ id: request.recieverId }, { id: request.senderId }],
          },
        },
      }),
    ]);

    revalidatePath("/contacts");
  } catch (err: any) {
    throw new Error(
      err?.response?.data?.message || err.response?.data || err.message
    );
  }
};
