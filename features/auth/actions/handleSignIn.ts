import { FormValues } from "@/hooks/use-form";
import { signIn } from "next-auth/react";

export const handleSignIn = async (values: FormValues) => {
  try {
    const callback = await signIn("credentials", {
      ...values,
      callbackUrl: "/",
      redirect: true,
    });

    if (callback?.error || !callback?.ok)
      throw new Error(callback?.error || "Request failed");

    return true;
  } catch (err: any) {
    throw new Error(
      err?.response?.data?.message || err?.response?.data || "Login failed"
    );
  }
};

export default handleSignIn;
