import Text from "@/components/ui/Text";
import Title from "@/components/ui/Title";
import { User } from "@prisma/client";
import Image from "next/image";
import ContactRequestButton from "@/features/contacts/components/contact-requests/ContactRequestButton";
import React from "react";
import { useAuth } from "@/features/auth/hooks/use-auth";

interface UserCardProps {
  className?: string;
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const auth = useAuth();

  return (
    <div className="flex items-center space-x-3 p-2">
      <Image
        src={user?.image || "/images/user.webp"}
        alt="Avatar"
        className="rounded-full drop-shadow-md"
        width={35}
        height={35}
      />
      <div>
        <Title
          variant="h3"
          textSize="base"
          className="font-[400]  text-textColors-primary"
        >
          {user?.name}
        </Title>
        <Text className="text-textColors-secondary" size="sm">
          {user?.email}
        </Text>
      </div>

      <ContactRequestButton
        strangerId={user?.id}
        currentUserId={auth?.user?.id as string}
      />
    </div>
  );
};

export default UserCard;
