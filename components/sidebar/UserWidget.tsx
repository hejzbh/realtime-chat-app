"use client";
import { useAuth } from "@/features/auth/hooks/use-auth";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("@/components/ui/Button"));

interface UserWidgetProps {
  className?: string;
}

const UserWidget = ({ className = "" }: UserWidgetProps) => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className={`${className}`}>
      <Button className="!p-0 bg-transparent hover:!bg-transparent">
        <Image
          src={user?.image || "/images/user.webp"}
          alt="Avatar"
          className="rounded-full drop-shadow-md"
          width={80}
          height={80}
        />
      </Button>
    </div>
  );
};

export default UserWidget;
