"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FormInputType } from "@/types/formTypes";
import { FormValues, Validators } from "@/hooks/use-form";
import { validateName } from "@/features/auth/utils/validateName";
import { initialValues } from "@/features/auth/data/initialFormValues";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const Form = dynamic(() => import("@/components/forms/Form"));
const Text = dynamic(() => import("@/components/ui/Text"));
const Button = dynamic(() => import("@/components/ui/Button"));

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

  async function onSubmit(values: FormValues) {
    try {
      if (variant === "sign-in") {
        // Login functionality
      }

      if (variant === "sign-up") {
        // Register Functionality
      }
    } catch {}
  }

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
        onSubmit={onSubmit}
      >
        {/** Social Authentication Options */}
        <Text
          size="xs"
          className="flex justify-center items-center space-x-5 my-3"
        >
          <span className="w-[30%] h-[1px] bg-borderColors-primary block" />
          <span className="text-center">Or continue with</span>
          <span className="w-[30%]  h-[1px] bg-borderColors-primary block" />
        </Text>

        <div className="grid grid-cols-2 gap-5">
          <Button
            variant="outline"
            textSize="base"
            className="flex items-center  justify-center"
          >
            <FcGoogle className="mr-2" /> Google
          </Button>
          <Button
            textSize="base"
            variant="outline"
            className="flex items-center  justify-center"
          >
            <FaGithub className="mr-2" /> Github
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AuthForm;
