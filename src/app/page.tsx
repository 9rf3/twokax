import PlayerHeader from "@/components/PlayerHeader";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background-dark">
      <PlayerHeader />

      <main className="flex flex-1 flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm font-medium text-zinc-600">Welcome to</p>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
            Quest Academy
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-zinc-500">
            Complete lessons, earn XP, and climb the leaderboard.
          </p>
        </div>
      </main>
    </div>
  );
}
