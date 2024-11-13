"use client";
import React from "react";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { useRouter } from "next/navigation";

const ProtectedContent = ({
  type,
  children,
  redirectTo,
}: {
  children: React.ReactNode;
  type: "only-unauthenticated" | "only-authenticated";
  redirectTo?: string;
}) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (
    (type === "only-unauthenticated" && isAuthenticated) ||
    (type === "only-authenticated" && !isAuthenticated)
  ) {
    if (redirectTo) router.push(redirectTo);

    return null;
  }

  // Can view content
  return children;
};

export default ProtectedContent;
