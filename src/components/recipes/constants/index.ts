export enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}

export const MAX_VISIBLE_TAGS = 4;
export const POPULAR_REVIEW_THRESHOLD = 70;
export const RECIPES_PER_PAGE_LIMIT = 8;
export const RECIPES_SEARCH_DEBOUNCE_MS = 400;
export const RECIPES_SEARCH_MIN_LENGTH = 3;

export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  [Difficulty.Easy]: "text-green-400",
  [Difficulty.Medium]: "text-orange-400",
  [Difficulty.Hard]: "text-red-400",
};
