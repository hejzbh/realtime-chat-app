import { signIn } from "next-auth/react";

export const handleSocialLogin = async (social: "github" | "google") => {
  const callback = await signIn(social, {
    redirect: false,
    callbackUrl: "/",
  });

  if (callback?.error || !callback?.ok) return false;

  return true;
};
