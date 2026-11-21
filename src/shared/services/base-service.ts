import { ApiRequestConfig } from "@/shared/services/types";

export const apiRequest = async <T = unknown>({ input, init }: ApiRequestConfig): Promise<T> => {
  const response = await fetch(input, init);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText} (${response.url})`);
  }

  return (await response.json()) as T;
};
