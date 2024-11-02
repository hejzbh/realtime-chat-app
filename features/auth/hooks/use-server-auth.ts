import { getServerSession } from "next-auth";
import authConfig from "../auth.config";

export const useServerAuth = async () => {
  try {
    const session = await getServerSession(authConfig);

    if (!session?.user) throw new Error("");

    return {
      user: session?.user,
    };
  } catch {
    throw new Error("Unauthorized");
  }
};
