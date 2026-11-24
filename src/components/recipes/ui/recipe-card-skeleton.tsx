import { cn } from "@/shared/lib/utils";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";
import { Skeleton } from "@/shared/ui/shadcn/skeleton";

export type RecipeCardSkeletonProps = Omit<React.ComponentProps<typeof Card>, "title">;

export function RecipeCardSkeleton({ className, ...props }: RecipeCardSkeletonProps) {
  return (
    <Card
      className={cn("relative", className)}
      {...props}
    >
      <div className="relative mx-4 h-56 overflow-hidden rounded-xl">
        <Skeleton className="h-full w-full" />
      </div>

      <CardHeader className="flex grow flex-col gap-2">
        <CardAction className="flex flex-wrap gap-1">
          <Skeleton className="h-5 w-13" />
          <Skeleton className="h-5 w-13" />
          <Skeleton className="h-5 w-13" />
          <Skeleton className="h-5 w-13" />
        </CardAction>

        <CardTitle className="flex gap-2">
          <Skeleton className="h-4 w-56" />
        </CardTitle>

        <CardDescription className="line-clamp-2 flex grow flex-col gap-2">
          <Skeleton className="h-3 w-72" />
          <Skeleton className="h-3 w-72" />
        </CardDescription>

        <CardDescription className="flex flex-col gap-2">
          <Skeleton className="h-3 w-30" />
          <Skeleton className="h-3 w-30" />
        </CardDescription>
      </CardHeader>
      <div className="px-4">
        <Skeleton className="h-8 w-full" />
      </div>
    </Card>
  );
}
