import { AsyncFunction } from "@/types/global";

export const isAsyncFunction = (fn: any): fn is AsyncFunction => {
  return (
    fn && typeof fn === "function" && fn.constructor.name === "AsyncFunction"
  );
};
