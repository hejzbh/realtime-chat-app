import { FormInputType } from "@/types/formTypes";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Text = dynamic(() => import("@/components/ui/Text"));

export interface InputProps {
  className?: string;
  label?: string;
  name: string;
  type: FormInputType["type"];
  Icon?: FormInputType["Icon"];
  error: string | null | undefined;
  required?: boolean;
  disabled?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  className = "",
  label,
  name,
  type,
  onChange,
  error,
  Icon,
  disabled,
  required,
  value,
}: InputProps) => {
  const [showPw, setShowPw] = useState<boolean>(false);

  Icon = type === "password" ? (showPw ? FaRegEye : FaRegEyeSlash) : Icon;

  return (
    <div className={`${className}`}>
      {label && (
        <label className="block mb-2" htmlFor={name}>
          <Text size="sm" className="!text-textColors-primary">
            {label}
            {required && <span className="text-textColors-danger pl-1">*</span>}
          </Text>
        </label>
      )}
      <div className={Icon ? "relative" : ""}>
        {Icon && (
          <Icon
            onClick={() => setShowPw((show) => !show)}
            className="absolute top-[50%]  translate-y-[-50%] left-3 text-textColors-secondary cursor-pointer"
          />
        )}

        <input
          type={type === "password" && showPw ? "text" : type}
          name={name}
          required={required}
          onChange={onChange}
          disabled={disabled}
          value={value}
          className={`border-[1px] border-borderColors-primary p-2 rounded-md w-full outline-none text-sm text-textColors-primary ${
            Icon && "pl-9"
          }`}
        />
      </div>

      {error && (
        <Text size="xs" className="!text-textColors-danger mt-1">
          {error}
        </Text>
      )}
    </div>
  );
};

export default Input;
