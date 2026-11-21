"use client";

import { useRecipes } from "@/components/recipes/hooks/use-recipes";
import { RecipeCard } from "@/components/recipes/ui/recipe-card";
import { cn } from "@/shared/lib/utils";
import { useTranslations } from "next-intl";

type RecipesListProps = React.ComponentProps<"div">;

export default function RecipesList({ className, ...props }: RecipesListProps): React.ReactNode {
  const t = useTranslations();
  const { data: recipes = [] } = useRecipes();

  return (
    <div
      className={cn(className, {
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": recipes.length > 0,
      })}
      {...props}
    >
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <RecipeCard
            recipe={recipe}
            key={recipe.id}
          />
        ))
      ) : (
        <span className="block text-center text-base font-medium text-slate-600">{t("recipes.notFound")}</span>
      )}
    </div>
  );
}
