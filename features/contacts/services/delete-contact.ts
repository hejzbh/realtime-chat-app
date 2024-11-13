"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteContact = async (contactId: string) => {
  try {
    await Promise.all([
      // Delete contact
      db.contact.delete({
        where: {
          id: contactId,
        },
      }),
      // Delete chat
    ]);

    revalidatePath("/contacts");
  } catch (err: any) {
    throw new Error(
      err?.response?.data?.message || err.response?.data || err.message
    );
  }
};

export default deleteContact;
