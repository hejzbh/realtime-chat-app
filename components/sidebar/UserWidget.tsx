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
  const { currentUser } = useAuth();

  if (!currentUser) return null;

  return (
    <div className={`${className}`}>
      <Button className="!p-0 bg-transparent hover:!bg-transparent">
        <Image
          src={currentUser?.image || "/images/user.webp"}
          alt="Avatar"
          className="rounded-full drop-shadow-md"
          width={60}
          height={60}
        />
      </Button>
    </div>
  );
};

export default UserWidget;
