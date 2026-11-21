import { messages } from "@/shared/i18n/messages";

export const DEFAULT_LOCALE = "uk-UA" as const;
export const LOCALE_COOKIE = "app-locale";
export const LOCALE_COOKIE_OPTIONS = {
  path: "/",
  maxAge: 60 * 60 * 24 * 365,
  sameSite: "lax",
} as const;

export type MessageLanguages = keyof typeof messages;
export type MessageSchema = (typeof messages)[typeof DEFAULT_LOCALE];

export const locales = Object.keys(messages) as MessageLanguages[];
export const defaultLocale: MessageLanguages = DEFAULT_LOCALE;

export const isLocale = (value: unknown): value is MessageLanguages => locales.includes(value as MessageLanguages);
