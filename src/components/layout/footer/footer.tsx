import { useTranslations } from "next-intl";

export default function Footer(): React.ReactNode {
  const t = useTranslations();
  return (
    <footer className="bg-accent-foreground">
      <div className="container mx-auto flex flex-col items-center px-3 py-1.5">
        <span className="text-base text-accent">{t("footer.developedBy")}</span>
        <span className="text-base text-accent">{`${t("footer.allRightsReserved")} ${new Date().getFullYear()}`}</span>
      </div>
    </footer>
  );
}
