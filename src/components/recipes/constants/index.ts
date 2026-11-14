export enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}

export const MAX_VISIBLE_TAGS = 4;
export const POPULAR_REVIEW_THRESHOLD = 70;

export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  [Difficulty.Easy]: "text-green-400",
  [Difficulty.Medium]: "text-orange-400",
  [Difficulty.Hard]: "text-red-400",
};
