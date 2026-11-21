import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DIFFICULTY_COLORS, MAX_VISIBLE_TAGS, POPULAR_REVIEW_THRESHOLD } from "@/components/recipes/constants";
import type { Recipe } from "@/components/recipes/types";
import { useTranslations } from "next-intl";

export type RecipeCardProps = Omit<React.ComponentProps<typeof Card>, "title"> & {
  recipe: Recipe;
};

export function RecipeCard({ recipe, className, ...props }: RecipeCardProps) {
  const t = useTranslations();
  const isPopular = recipe.reviewCount >= POPULAR_REVIEW_THRESHOLD;
  const visibleTags = recipe.tags.slice(0, MAX_VISIBLE_TAGS);
  const hiddenTagsCount = recipe.tags.length - visibleTags.length;

  return (
    <Card
      className={cn("relative overflow-visible", className)}
      {...props}
    >
      {isPopular && (
        <Badge className="absolute top-0 left-4 z-10 -translate-y-1/2 bg-red-500">{t("recipes.mostPopular")}</Badge>
      )}

      <div className="relative mx-4 h-56 overflow-hidden rounded-xl">
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          loading="eager"
        />
      </div>

      <CardHeader className="flex grow flex-col gap-2">
        <CardAction className="flex flex-wrap gap-1">
          {visibleTags.map((tag, idx) => (
            <Badge key={idx}>{tag}</Badge>
          ))}
          {hiddenTagsCount > 0 && (
            <Badge>
              +{hiddenTagsCount}&nbsp;{t("nouns.more")}
            </Badge>
          )}
        </CardAction>

        <CardTitle>{recipe.name}</CardTitle>

        <CardDescription className="line-clamp-2 grow">{recipe.ingredients.join(", ")}</CardDescription>

        <CardDescription>
          <p>
            {t("recipes.difficulty")}:&nbsp;
            <strong className={DIFFICULTY_COLORS[recipe.difficulty]}>
              {t(`recipes.difficultyLevel.${recipe.difficulty}`)}
            </strong>
          </p>
          <p>
            {t("recipes.cuisine")}:&nbsp;<span className="text-slate-700">{recipe.cuisine}</span>
          </p>
        </CardDescription>
      </CardHeader>

      <Button
        variant="outline"
        className="mx-4 flex cursor-pointer gap-2"
      >
        <span className="grow">{t("recipes.viewRecipe")}</span>
        <ArrowRight aria-hidden />
      </Button>
    </Card>
  );
}
