import RecipesEN from "@/components/recipes/translations/en-US";
import RecipesUA from "@/components/recipes/translations/uk-UA";
import sharedEN from "@/shared/translations/en-US";
import sharedUA from "@/shared/translations/uk-UA";

export const messages = {
  "uk-UA": {
    ...sharedUA,
    ...RecipesUA,
  },
  "en-US": {
    ...sharedEN,
    ...RecipesEN,
  },
};
