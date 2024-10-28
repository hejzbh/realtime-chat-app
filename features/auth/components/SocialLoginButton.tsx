import dynamic from "next/dynamic";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const Button = dynamic(() => import("@/components/ui/Button"));

interface SocialLoginButtonProps {
  className?: string;
  social: "google" | "github";
  onClick: (variant: SocialLoginButtonProps["social"]) => void;
}

const SocialLoginButton = ({
  className = "",
  social,
  onClick,
}: SocialLoginButtonProps) => {
  const Icon = social === "github" ? FaGithub : FcGoogle;

  return (
    <Button
      variant="outline"
      type="button"
      onClick={(e) => {
        e.stopPropagation();

        onClick(social);
      }}
      textSize="base"
      className={`flex items-center justify-center ${className}`}
    >
      <Icon className="mr-2" /> {social === "github" ? "Github" : "Google"}
    </Button>
  );
};

export default SocialLoginButton;
