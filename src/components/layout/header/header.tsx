import { NavigationMenu } from "@/components/ui/navigation-menu";

export default function Header(): React.ReactNode {
  return (
    <header className="bg-accent-foreground">
      <div className="container mx-auto px-3 py-1">
        <NavigationMenu>
          <span className="text-2xl font-bold text-accent">Healthy recipes</span>
        </NavigationMenu>
      </div>
    </header>
  );
}
