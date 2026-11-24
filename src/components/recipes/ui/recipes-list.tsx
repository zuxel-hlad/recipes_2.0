"use client";

import { useRecipes } from "@/components/recipes/hooks/use-recipes";
import { RecipeCard } from "@/components/recipes/ui/recipe-card";
import { useTranslations } from "next-intl";
import { BasePagination } from "@/shared/ui/base-pagination";
import { cn } from "@/shared/lib/utils";
import { RecipesListSkeleton } from "@/components/recipes/ui/recipes-list-skeleton";

type RecipesListProps = React.ComponentProps<"div">;

export default function RecipesList({ className, ...props }: RecipesListProps): React.ReactNode {
  const t = useTranslations();

  const { recipes, totalPages, setPage, page, isRecipesLoading } = useRecipes();

  return (
    <>
      {isRecipesLoading ? (
        <RecipesListSkeleton />
      ) : (
        <div
          className={cn(className, {
            "mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": recipes.length > 0,
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
      )}

      <BasePagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
}
