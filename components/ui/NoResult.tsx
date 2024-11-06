import React from "react";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import { TfiFaceSad } from "react-icons/tfi";

interface NoResultProps {
  className?: string;
  title: string;
  description: string;
}

const NoResult = ({ className = "", title, description }: NoResultProps) => {
  return (
    <div className={`text-center ${className}`}>
      <TfiFaceSad className="mb-5" />
      <Title variant="h2">{title}</Title>
      <Text>{description}</Text>
    </div>
  );
};

export default NoResult;
