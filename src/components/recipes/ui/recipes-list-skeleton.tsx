import { RecipeCardSkeleton } from "@/components/recipes/ui/recipe-card-skeleton";
import { RECIPES_PER_PAGE_LIMIT } from "@/components/recipes/constants";
import { cn } from "@/shared/lib/utils";

type RecipesListSkeletonProps = React.ComponentProps<"div">;

export function RecipesListSkeleton({ className }: RecipesListSkeletonProps): React.ReactNode {
  return (
    <div className={cn("mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", className)}>
      {new Array(RECIPES_PER_PAGE_LIMIT).fill(<></>).map((_, idx) => (
        <RecipeCardSkeleton key={idx} />
      ))}
    </div>
  );
}
