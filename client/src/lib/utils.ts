import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const validateEnvVariable = (
  variable: string | undefined,
  name: string
): void => {
  if (!variable) {
    throw new Error(`Missing environment variable: ${name}`);
  }
};
