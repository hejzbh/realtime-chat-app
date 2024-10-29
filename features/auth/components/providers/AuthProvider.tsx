"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useMemo, useState } from "react";

export type AuthContextType = {
  isLoading: boolean;
  isAuthenticated: boolean;
  user?: any;
};

export const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined
);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(session?.status === "loading");
    setIsAuthenticated(session?.status === "authenticated");
  }, [session?.status, session?.data?.user]);

  const value = useMemo(
    () => ({
      user: session?.data?.user,
      isLoading,
      isAuthenticated,
    }),
    [isLoading, isAuthenticated, session?.data]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;