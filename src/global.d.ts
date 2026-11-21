import type { messages } from "@/shared/i18n/messages";
import { DEFAULT_LOCALE } from "@/shared/i18n/setup";

declare module "next-intl" {
  interface AppConfig {
    Locale: keyof typeof messages;
    Messages: (typeof messages)[typeof DEFAULT_LOCALE];
  }
}
