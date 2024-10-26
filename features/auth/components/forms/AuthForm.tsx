"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useForm } from "@/hooks/use-form";

const Title = dynamic(() => import("@/components/ui/Title"));
const Paragraph = dynamic(() => import("@/components/ui/Paragraph"));

export interface AuthFormProps {
  className?: string;
  variant: "sign-up" | "sign-in";
}

const initialValues = {
  "sign-in": { email: "", password: "" },
  "sign-up": {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  },
};

const AuthForm = ({ className = "", variant }: AuthFormProps) => {
  const {} = useForm({
    initialValues: initialValues[variant],
  });

  return (
    <form className={`bg-white rounded-md p-5 ${className}`}>
      <Title variant="h1" className="mb-1">
        {variant == "sign-in" ? "Login" : "Register"}
      </Title>
      <Paragraph>
        {variant === "sign-in"
          ? "Sign in to see what you’ve missed."
          : "Sign up to share moments with friends!"}
      </Paragraph>
    </form>
  );
};

export default AuthForm;
