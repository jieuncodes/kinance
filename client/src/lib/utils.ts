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

export const sortData = ({
  data,
  isAscending,
  key,
}: {
  data: any[];
  isAscending: boolean | null;
  key: string;
}) => {
  if (isAscending === null) return data;
  return [...data].sort((a, b) => {
    const valueA = a[key.toLowerCase()];
    const valueB = b[key.toLowerCase()];

    if (valueA === undefined || valueB === undefined) {
      return 0;
    }
    const upperA = valueA.toUpperCase();
    const upperB = valueB.toUpperCase();

    if (isAscending) {
      return upperA < upperB ? -1 : upperA > upperB ? 1 : 0;
    } else {
      return upperA > upperB ? -1 : upperA < upperB ? 1 : 0;
    }
  });
};
