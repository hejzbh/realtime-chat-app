"use client";
import React, { createContext, useState, useCallback } from "react";
import dynamic from "next/dynamic";

const Notification = dynamic(() => import("@/components/ui/Notification"));

export type NotificationType = {
  id: number;
  title: string;
  message: string;
  variant: "success" | "info" | "error";
};

export type NotificationsContextType = {
  notifications: NotificationType[];
  showNotification: (props: {
    message: string;
    duration?: number;
    variant: NotificationType["variant"];
    title: string;
  }) => void;
};

export const NotificationsContext = createContext<
  NotificationsContextType | undefined
>(undefined);

export const NotificationsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const showNotification = useCallback(
    ({
      message,
      duration = 4000,
      variant,
      title,
    }: {
      message: string;
      duration?: number;
      variant: NotificationType["variant"];
      title: string;
    }) => {
      const id = Date.now();

      setNotifications((prev) => [...prev, { id, message, variant, title }]);

      setTimeout(() => {
        setNotifications((prev) =>
          prev.filter((notification) => notification.id !== id)
        );
      }, duration);
    },
    []
  );

  return (
    <NotificationsContext.Provider value={{ notifications, showNotification }}>
      {children}
      <div className="fixed top-10 left-[50%] translate-x-[-50%] !z-[2000]">
        {notifications.map((notification, index) => {
          const isNewestNotification = index === notifications.length - 1;

          return (
            <Notification
              key={notification.id}
              {...notification}
              style={{
                marginBottom: isNewestNotification ? 0 : `-${index + 40}px`,
                opacity: isNewestNotification ? 1 : 0.6,
              }}
            />
          );
        })}
      </div>
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;
