"use client";
import React from "react";
import Title from "@/components/ui/Title";
import Search from "@/components/ui/Search";
import Button from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlinePlus } from "react-icons/hi";
import { useModal } from "@/hooks/use-modal";
import { ModalType } from "../providers/ModalProvider";

export interface SidebarToolbarProps {
  className?: string;
  title: string;
  modalType: ModalType;
  includeSearch?: boolean;
}

const SidebarToolbar = ({
  className = "",
  title,
  modalType,
  includeSearch,
}: SidebarToolbarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { openModal } = useModal();

  return (
    <div className={`${className}`}>
      {" "}
      {/** Title & Button */}
      <div className="flex items-center justify-between">
        <Title
          variant="h3"
          textSize="xl"
          className="text-textColors-primary font-[500]"
        >
          {title}
        </Title>

        <Button
          onClick={() => {
            openModal(modalType);
          }}
          variant="outline"
        >
          <HiOutlinePlus className="text-primary" />
        </Button>
      </div>
      {/** Search */}
      {includeSearch && (
        <Search
          className="my-4"
          onChange={(searchQuery) => {
            //  Add searchQuery to URL
            if (searchQuery) {
              router.push(`${pathname}?q=${searchQuery}`);
            } else {
              // Delete search query from URL
              router.push(`${pathname}`);
            }
          }}
        />
      )}
    </div>
  );
};

export default SidebarToolbar;
