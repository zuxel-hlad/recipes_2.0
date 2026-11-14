import RecipesList from "@/components/recipes/ui/recipes-list";

export default function Home() {
  return (
    <div className="container mx-auto px-3 py-1.5">
      <h1 className="mb-2 text-center text-4xl font-bold">Recipes worth cooking twice</h1>
      <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-500">
        A hand-picked collection of everyday meals and weekend projects — clear steps, real ingredients, no guesswork.
      </p>
      <RecipesList />
    </div>
  );
}
