"use client";
import { useContext } from "react";
import {
  AuthContext,
  AuthContextType,
} from "@/features/auth/components/providers/AuthProvider";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within a AuthProvider or something went wrong"
    );
  }

  return context;
};
