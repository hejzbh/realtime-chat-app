"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const declineContactRequest = async (requestId: string) => {
  try {
    await db.contactRequest.delete({ where: { id: requestId } });

    revalidatePath("/contacts");
  } catch (err: any) {
    throw new Error(
      err?.response?.data?.message || err.response?.data || err.message
    );
  }
};
