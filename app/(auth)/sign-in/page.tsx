import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const AuthForm = dynamic(
  () => import("@/features/auth/components/forms/AuthForm")
);
const Paragraph = dynamic(() => import("@/components/ui/Text"));

const SignInPage = () => {
  return (
    <div className="w-full">
      <AuthForm variant="sign-in" />
      <Paragraph size="sm" className="text-center mt-10">
        Don't have a account?{" "}
        <Link
          href={"/sign-up"}
          title="Redirect To Sign Up Page"
          className="text-textColors-link hover:opacity-80 transition"
        >
          Sign Up
        </Link>
      </Paragraph>
    </div>
  );
};

export default SignInPage;
