"use client";
import dynamic from "next/dynamic";
import React, { createContext, Suspense, useMemo, useState } from "react";

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
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl p-5 w-full max-w-[50%]"
            onClick={(e) => e.stopPropagation()}
          >
            {" "}
            <RenderModal modalType={modalType} />
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

const RenderModal = ({ modalType }: { modalType: ModalType | undefined }) => {
  switch (modalType) {
    case "users":
      const UsersModal = React.lazy(
        () => import("@/features/users/components/modals/UsersModal")
      );

      return (
        <Suspense fallback={"..."}>
          <UsersModal />
        </Suspense>
      );
    default:
      return null;
  }
};

export default ModalProvider;
