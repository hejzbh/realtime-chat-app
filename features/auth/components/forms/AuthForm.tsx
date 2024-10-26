import React from "react";

export interface AuthFormProps {
  className?: string;
  variant: "sign-up" | "sign-in";
}

const AuthForm = ({ className = "" }: AuthFormProps) => {
  return <form className={`${className}`}>AuthForm</form>;
};

export default AuthForm;
