"use client";
import { useContext } from "react";
import {
  ModalContextType,
  ModalContext,
} from "@/components/providers/ModalProvider";

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useModal must be used within a ModalProvider or something went wrong"
    );
  }

  return context;
};
