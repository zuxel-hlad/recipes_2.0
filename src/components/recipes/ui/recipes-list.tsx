import { Recipe } from "@/components/recipes/types";
import { RecipeCard } from "@/components/recipes/ui/recipe-card";
import { cn } from "cn";

type RecipesListProps = React.ComponentProps<"div">;

export default function RecipesList({ className, ...props }: RecipesListProps): React.ReactNode {
  const recipes: Recipe[] = [];
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
        <span className="block text-center text-base font-medium text-slate-600">No recipes found</span>
      )}
    </div>
  );
}
