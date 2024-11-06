import { useEffect, useState } from "react";

let timeout: any = null;

export const useDebounce = ({
  value,
  time,
}: {
  value: string;
  time: number;
}) => {
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  useEffect(() => {
    if (timeout) {
      // When user delete entire value dont wait...
      if (!value) {
        setDebouncedValue(value);
        return;
      }
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, time);

    return () => clearTimeout(timeout);
  }, [value]);

  return debouncedValue;
};
