export default async function CurrentYear(): Promise<React.ReactNode> {
  "use cache";

  return new Date().getFullYear();
}
