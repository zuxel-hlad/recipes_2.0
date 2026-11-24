import Image from "next/image";
import { ArrowRight, LoaderIcon } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/shadcn/badge";
import { Button } from "@/shared/ui/shadcn/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";
import { DIFFICULTY_COLORS, MAX_VISIBLE_TAGS, POPULAR_REVIEW_THRESHOLD } from "@/components/recipes/constants";
import type { Recipe } from "@/components/recipes/types";
import { useTranslations } from "next-intl";
import { useState } from "react";

export type RecipeCardProps = Omit<React.ComponentProps<typeof Card>, "title"> & {
  recipe: Recipe;
};

export function RecipeCard({ recipe, className, ...props }: RecipeCardProps) {
  const [isImageReady, setImageReady] = useState<boolean>(false);
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
        {!isImageReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/45">
            <LoaderIcon
              className="animate-spin text-white"
              role="status"
            />
          </div>
        )}

        <Image
          fill
          src={recipe.image}
          alt={recipe.name}
          loading="eager"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={cn("object-cover", { "opacity-0": !isImageReady })}
          onError={() => setImageReady(true)}
          onLoad={() => setImageReady(true)}
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
