"use client";
import { useDebounce } from "@/hooks/use-debounce";
import React, { useEffect, useRef, useState } from "react";
import { FcSearch } from "react-icons/fc";

export interface SearchProps {
  className?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const Search = ({
  className = "",
  onChange = () => {},
  disabled,
}: SearchProps) => {
  const [value, setValue] = useState<string>("");
  const debounced: string = useDebounce({ value, time: 300 });

  const mounted: { current: boolean | undefined } = useRef();

  useEffect(() => {
    // Prevent triggering onChange function when Component is first time rendered (mounted)
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    onChange(debounced);
  }, [debounced]); // eslint-disable-line

  return (
    <div className={`relative ${className}`}>
      <input
        placeholder="Search"
        disabled={disabled}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none w-full p-2 rounded-lg drop-shadow-sm border-[1px] border-borderColors-primary placeholder:font-[400] placeholder:text-[14px]  text-textColors-primary font-[400] text-[15px] pr-6"
      />
      <FcSearch className="absolute top-[50%] translate-y-[-50%] right-2" />
    </div>
  );
};

export default Search;
