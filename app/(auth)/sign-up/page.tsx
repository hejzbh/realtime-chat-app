import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const AuthForm = dynamic(
  () => import("@/features/auth/components/forms/AuthForm")
);
const Paragraph = dynamic(() => import("@/components/ui/Text"));

const SignUpPage = () => {
  return (
    <div className="w-full">
      <AuthForm variant="sign-up" />
      <Paragraph size="sm" className="text-center mt-10">
        Already have a account?{" "}
        <Link
          href={"/sign-in"}
          title="Redirect To Sign In Page"
          className="text-textColors-link hover:opacity-80 transition"
        >
          Sign In
        </Link>
      </Paragraph>
    </div>
  );
};

export default SignUpPage;
