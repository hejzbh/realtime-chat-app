"use client";
import React, { createContext, useMemo, useState } from "react";

export type ModalContextType = {
  isOpen: boolean;
  modalType?: ModalType;
  openModal: (modalType: ModalType, data?: any) => void;
  closeModal: () => void;
};

export type ModalType = "users";

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalType, setModalType] = useState<ModalType>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const openModal = (modalType: ModalType, data?: any) => {
    setModalType(modalType);
    setIsOpen(true);
    setData(data);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalType(undefined);
    setData(null);
  };

  const value = useMemo(
    () => ({
      modalType,
      isOpen,
      data,
      openModal,
      closeModal,
    }),
    [modalType, isOpen, data]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50"></div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
