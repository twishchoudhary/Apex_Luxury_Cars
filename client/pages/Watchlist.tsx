import { Header } from "@/components/Header";

export default function Watchlist() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Watchlist</h1>
          <p className="text-muted-foreground text-lg">
            Monitor your favorite stocks in one place
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            This page is ready to be filled in with your watchlist. Continue prompting to build it out!
          </p>
        </div>
      </main>
    </div>
  );
}
