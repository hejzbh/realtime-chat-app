import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { FormInputType } from "@/types/formTypes";

export const signUpFormInputs: FormInputType[] = [
  {
    name: "firstName",
    label: "First Name",
    variant: "input",
    required: true,
    Icon: AiOutlineUser,
  },
  {
    name: "lastName",
    label: "Last Name",
    variant: "input",
    required: true,
    Icon: AiOutlineUser,
  },
  {
    name: "userName",
    label: "Username",
    variant: "input",
    required: true,
    Icon: AiOutlineUser,
  },
  {
    name: "email",
    label: "E-Mail",
    variant: "input",
    required: true,
    type: "email",
    Icon: AiOutlineMail,
  },
  {
    name: "password",
    label: "Password",
    variant: "input",
    type: "password",
    required: true,
  },
];

export const signInFormInputs: FormInputType[] = [
  {
    name: "email",
    label: "E-Mail",
    variant: "input",
    type: "email",
    required: true,
    Icon: AiOutlineMail,
  },
  {
    name: "password",
    label: "Password",
    variant: "input",
    type: "password",
    required: true,
  },
];
