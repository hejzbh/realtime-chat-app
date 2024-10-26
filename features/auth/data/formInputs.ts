export const signUpFormInputs: FormInput[] = [
  { name: "firstName", label: "First Name", type: "input", required: true },
  { name: "lastName", label: "Last Name", type: "input", required: true },
  { name: "userName", label: "Username", type: "input", required: true },
  { name: "email", label: "E-Mail", type: "input", required: true },
  { name: "password", label: "Password", type: "input", required: true },
];

export const signInFormInputs: FormInput[] = [
  { name: "email", label: "E-Mail", type: "input", required: true },
  { name: "password", label: "Password", type: "input", required: true },
];

export type FormInput = {
  type: "input" | "textarea" | "checkbox";
  name: string;
  label: string;
  placeholder?: string;
  Icon?: any;
  required?: boolean;
};
