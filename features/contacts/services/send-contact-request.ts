"use server";
import { db } from "@/lib/db";

export interface SendContactRequestParams {
  senderId: string;
  recieverId: string;
}

export const sendContactRequest = async ({
  senderId,
  recieverId,
}: SendContactRequestParams) => {
  try {
    await db.contactRequest.create({
      data: {
        recieverId,
        senderId,
      },
    });
  } catch (err: any) {
    throw new Error(
      err?.response?.data?.message || err.response?.data || err.message
    );
  }
};
