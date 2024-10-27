import { IconType } from "react-icons";

export type FormInputType = {
  variant: "input" | "textarea" | "checkbox";
  type?: "email" | "password" | "number" | "text";
  name: string;
  label: string;
  placeholder?: string;
  Icon?: IconType;
  required?: boolean;
};
