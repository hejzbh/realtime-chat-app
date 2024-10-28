import { FormValues } from "@/hooks/use-form";
import { User } from "@prisma/client";
import axios from "axios";

export const handleSignUp = async (values: FormValues): Promise<User> => {
  try {
    const response = await axios.post(`/api/register`, values);

    const createdUser: User = response.data;

    if (!createdUser) throw new Error("Something went wrong");

    return createdUser;
  } catch (err: any) {
    throw new Error(
      err?.response?.data?.message ||
        err?.response?.data ||
        "Registration failed"
    );
  }
};

export default handleSignUp;
