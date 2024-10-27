"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FormInputType } from "@/types/formTypes";
import { Validators } from "@/hooks/use-form";
import { validateName } from "@/features/auth/utils/validateName";
import { initialValues } from "@/features/auth/data/initialFormValues";

const Form = dynamic(() => import("@/components/forms/Form"));

export interface AuthFormProps {
  className?: string;
  variant: "sign-up" | "sign-in";
}

const formValidators: Validators = {
  password: (inputValue) =>
    inputValue.length < 8
      ? "Password should be at least 8 characters"
      : undefined,
  firstName: (inputValue) =>
    validateName({ inputName: "firstName", inputValue }),
  lastName: (inputValue) => validateName({ inputName: "lastName", inputValue }),
  userName: () => {
    // TODO: Check does that username exists on back-end
    return undefined;
  },
};

const AuthForm = ({ className = "", variant }: AuthFormProps) => {
  const [formInputs, setFormInputs] = useState<FormInputType[]>([]);

  useEffect(() => {
    import("@/features/auth/data/formInputs").then((res) =>
      setFormInputs(
        variant === "sign-in" ? res.signInFormInputs : res.signUpFormInputs
      )
    );
  }, [variant]);

  return (
    <div className={`${className}`}>
      <Form
        initialValues={initialValues[variant]}
        title={variant == "sign-in" ? "Login" : "Register"}
        description={
          variant === "sign-in"
            ? "Sign in to see what you’ve missed."
            : "Sign up to share moments with friends!"
        }
        formInputs={formInputs}
        validators={formValidators}
        onSubmit={() => {
          alert("TODO");
        }}
      />
    </div>
  );
};

export default AuthForm;
