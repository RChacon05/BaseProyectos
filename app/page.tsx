import { UserLists } from "./features/userLists"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl p-8 bg-white dark:bg-black">
        <UserLists />
      </main>
    </div>
  )
}
