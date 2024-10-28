import React from "react";
import { NotificationType } from "../providers/NotificationsProvider";
import clsx from "@/utils/clsx";
import Text from "./Text";
import Title from "./Title";

export type NotificationProps = {
  className?: string;
  style?: React.CSSProperties;
} & NotificationType;

const Notification = ({
  className = "",
  message,
  variant,
  title,
  style = {},
}: NotificationProps) => {
  return (
    <div
      style={style}
      className={clsx(
        "p-3 rounded-lg relative drop-shadow-sm min-w-[180px] md:min-w-[230px] transition-all",
        {
          "bg-green-700": variant === "success",
          "bg-yellow-600": variant === "info",
          "bg-danger": variant === "error",
        },
        className
      )}
    >
      <Title variant="h3" className="text-white font-[500]" textSize="xl">
        {title}
      </Title>
      <Text size="lg" className="text-white">
        {message}
      </Text>
    </div>
  );
};

export default Notification;
