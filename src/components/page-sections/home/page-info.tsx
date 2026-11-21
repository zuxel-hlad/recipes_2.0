import { useTranslations } from "next-intl";

export default function HomeInfo(): React.ReactNode {
  const t = useTranslations();
  return (
    <>
      <h1 className="mb-2 text-center text-4xl font-bold">{t("home.title")}</h1>
      <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-500">{t("home.description")}</p>
    </>
  );
}
