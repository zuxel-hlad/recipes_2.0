import { defaultLocale, LOCALE_COOKIE, LOCALE_COOKIE_OPTIONS, isLocale } from "@/shared/i18n/setup";
import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  if (!isLocale(request.cookies.get(LOCALE_COOKIE)?.value)) {
    response.cookies.set(LOCALE_COOKIE, defaultLocale, LOCALE_COOKIE_OPTIONS);
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
