import { NavigationMenu } from "@/components/ui/navigation-menu";
import { useTranslations } from "next-intl";

export default function Header(): React.ReactNode {
  const t = useTranslations();
  return (
    <header className="bg-accent-foreground">
      <div className="container mx-auto px-3 py-1">
        <NavigationMenu>
          <span className="text-2xl font-bold text-accent">{t("header.logo")}</span>
        </NavigationMenu>
      </div>
    </header>
  );
}
