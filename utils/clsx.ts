/**
 * A utility function to concatenate class names based on different input types,
 * such as strings, arrays, and objects. It ensures only valid class names are included,
 * joining them into a single space-separated string.
 *
 * @param args - Accepts a variable number of arguments that can be strings, arrays, or objects.
 * @returns A concatenated string of class names.
 */

export const clsx = (...args: any[]): string =>
  args
    .flatMap((value) => {
      // If the value is a string, return it directly as a class name.
      if (typeof value === "string") return value;

      // If the value is an array, filter only string elements and return them.
      if (Array.isArray(value)) {
        return value.filter((item) => typeof item === "string");
      }

      // If the value is an object, check each key-value pair.
      // Include the key as a class name only if its value is true (exmpl: {"text-red": isError}).
      if (typeof value === "object" && value !== null) {
        return Object.entries(value).map(([tailwindClass, isConditionTrue]) => {
          return isConditionTrue ? tailwindClass : "";
        });
      }

      return [];
    })
    .flat(3)
    .join(" ");

export default clsx;
