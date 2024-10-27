export type AsyncFunction<T extends any[] = any[], R = Promise<any>> = (
  ...args: T
) => R;
