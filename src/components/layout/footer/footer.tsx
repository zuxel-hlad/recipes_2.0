export default function Footer(): React.ReactNode {
  return (
    <footer className="bg-accent-foreground">
      <div className="container mx-auto flex flex-col items-center px-3 py-1.5">
        <span className="text-base text-accent">Developed and designed by Stanislav</span>
        <span className="text-base text-accent">All rights reserved {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
