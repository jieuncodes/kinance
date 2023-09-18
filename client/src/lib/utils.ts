import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { SortDataParams } from "./utilTypes";
import { KinanceServiceMarkets } from "types/marketTypes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateEnvVariable = (
  variable: string | undefined,
  name: string,
): void => {
  if (!variable) {
    throw new Error(`Missing environment variable: ${name}`);
  }
};

const getValueByPath = (object: any, path: string) => {
  const keys = path.split(".");
  let value = object;

  for (let key of keys) {
    if (value == null) return undefined;
    value = value[key];
  }
  return value;
};

const compareValues = <T>(a: T, b: T, isAscending: boolean) => {
  const upperA = typeof a === "string" ? a.toUpperCase() : a;
  const upperB = typeof b === "string" ? b.toUpperCase() : b;

  if (isAscending) {
    return upperA < upperB ? -1 : upperA > upperB ? 1 : 0;
  } else {
    return upperA > upperB ? -1 : upperA < upperB ? 1 : 0;
  }
};

export const sortData = <T>({ data, isAscending, key }: SortDataParams<T>) => {
  if (isAscending === null) return data;

  return [...data].sort((a, b) => {
    const valueA = getValueByPath(a, key);
    const valueB = getValueByPath(b, key);

    if (valueA === undefined || valueB === undefined) {
      return 0;
    }

    return compareValues(valueA, valueB, isAscending);
  });
};

export const FormattedCurrency = ({
  value,
  currency,
}: {
  value: number | undefined;
  currency: KinanceServiceMarkets;
}) =>
  value?.toLocaleString("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }) || null;
