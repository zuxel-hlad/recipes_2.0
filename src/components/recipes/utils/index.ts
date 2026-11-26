import { createParser, parseAsString } from "nuqs/server";
import { RECIPES_SEARCH_MIN_LENGTH } from "@/components/recipes/constants";

export const pageParser = createParser({
  parse: (value) => {
    const page = parseInt(value, 10);
    return Number.isNaN(page) ? null : Math.max(1, page);
  },
  serialize: String,
}).withDefault(1);

export const recipesSearchParams = {
  page: pageParser,
  q: parseAsString.withDefault(""),
};

export const getSearchTerm = (query?: string): string => {
  const term = query?.trim() ?? "";
  return term.length >= RECIPES_SEARCH_MIN_LENGTH ? term : "";
};
