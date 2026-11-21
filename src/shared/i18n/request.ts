import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { messages } from "@/shared/i18n/messages";
import { defaultLocale, isLocale, LOCALE_COOKIE } from "@/shared/i18n/setup";

export default getRequestConfig(async () => {
  const fromCookie = (await cookies()).get(LOCALE_COOKIE)?.value;
  const locale = isLocale(fromCookie) ? fromCookie : defaultLocale;

  return { locale, messages: messages[locale] };
});
