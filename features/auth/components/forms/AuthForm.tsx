import React from "react";
import dynamic from "next/dynamic";

const Title = dynamic(() => import("@/components/ui/Title"));
const Paragraph = dynamic(() => import("@/components/ui/Paragraph"));

export interface AuthFormProps {
  className?: string;
  variant: "sign-up" | "sign-in";
}

const AuthForm = ({ className = "", variant }: AuthFormProps) => {
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
