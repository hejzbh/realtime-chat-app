import React from "react";
import Image from "next/image";

type AvatarProps = {
  className?: string;
  imageURL: string | null | undefined;
};

const Avatar = ({ className, imageURL }: AvatarProps) => {
  return (
    <Image
      src={imageURL || "/images/user.webp"}
      alt="Avatar"
      className={`rounded-full drop-shadow-md ${className}`}
      width={35}
      height={35}
    />
  );
};

export default Avatar;
