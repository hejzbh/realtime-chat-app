"use client";
import { useContext } from "react";
import {
  NotificationsContextType,
  NotificationsContext,
} from "@/components/providers/NotificationsProvider";

export const useNotifications = (): NotificationsContextType => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider or something went wrong"
    );
  }

  return context;
};
