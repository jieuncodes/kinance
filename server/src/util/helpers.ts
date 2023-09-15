export const validateEnvVariable = (
  variable: string | undefined,
  name: string
): void => {
  if (!variable) {
    throw new Error(`Missing environment variable: ${name}`);
  }
};
