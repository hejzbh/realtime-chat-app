"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FormInputType } from "@/types/formTypes";
import { FormValues, Validators } from "@/hooks/use-form";
import { validateName } from "@/features/auth/utils/validateName";
import { initialValues } from "@/features/auth/data/initialFormValues";
import { useRouter } from "next/navigation";
import { useNotifications } from "@/hooks/use-notifications";
import handleSignIn from "@/features/auth/actions/handleSignIn";
import handleSignUp from "@/features/auth/actions/handleSignUp";
import { handleSocialLogin } from "../../actions/handleSocialLogin";
import { routePaths } from "@/data/routePaths";

const Form = dynamic(() => import("@/components/forms/Form"));
const Text = dynamic(() => import("@/components/ui/Text"));
const SocialLoginButton = dynamic(
  () => import("@/features/auth/components/SocialLoginButton")
);

export interface AuthFormProps {
  className?: string;
  variant: "sign-up" | "sign-in";
}

const signUpValidators: Validators = {
  password: (inputValue: string) => {
    return inputValue?.length < 8
      ? "Password should be at least 8 characters"
      : undefined;
  },
  firstName: (inputValue: string) =>
    validateName({ inputName: "firstName", inputValue }),
  lastName: (inputValue: string) =>
    validateName({ inputName: "lastName", inputValue }),
}; // todo: username

const signInValidators: Validators = {
  password: signUpValidators.password,
};

const AuthForm = ({ className = "", variant }: AuthFormProps) => {
  const [formInputs, setFormInputs] = useState<FormInputType[]>([]);
  const { showNotification } = useNotifications();
  const router = useRouter();

  // Import file that we should use at this point
  useEffect(() => {
    import("@/features/auth/data/formInputs").then((res) =>
      setFormInputs(
        variant === "sign-in" ? res.signInFormInputs : res.signUpFormInputs
      )
    );
  }, [variant]);

  async function onFormSubmit(values: FormValues) {
    try {
      if (variant === "sign-in") {
        // Login functionality
        await handleSignIn(values);
      }

      if (variant === "sign-up") {
        // Register Functionality
        await handleSignUp(values).then(() => router.push(routePaths.SIGN_IN));
      }

      // If we successfully did action, show notification
      showNotification({
        variant: "success",
        title:
          variant === "sign-in"
            ? "Successfully logged in"
            : "Successfully registered",
        message:
          variant === "sign-in"
            ? "Welcome to Heyz Chat Application!"
            : "Now, login with your credentials",
      });
    } catch (err: any) {
      // Handle error
      showNotification({
        variant: "error",
        title: "Error",
        message: err.message,
      });
    }
  }

  async function onSocialLogin(social: "github" | "google") {
    try {
      // Try to login
      await handleSocialLogin(social);

      // If we successfully did action, show notification
      showNotification({
        variant: "success",
        title: "Successfully logged in using " + social,
        message: "Welcome to Heyz Chat Application",
      });
    } catch (err: any) {
      // Handle error
      showNotification({
        variant: "error",
        title: "Social Error",
        message: err.message,
        duration: 5000,
      });
    }
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
        validators={variant === "sign-up" ? signUpValidators : signInValidators}
        onSubmit={onFormSubmit}
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
          <SocialLoginButton social="google" onClick={onSocialLogin} />
          <SocialLoginButton social="github" onClick={onSocialLogin} />
        </div>
      </Form>
    </div>
  );
};

export default AuthForm;
