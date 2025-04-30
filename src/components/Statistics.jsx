function Statistics({ characters, words, sentence }) {
  return (
    <div className="flex w-full flex-col gap-4 sm:flex-row">
      <div className="character w-full rounded-xl bg-purple-400 px-5 py-7 sm:px-3 sm:py-6 md:px-4 md:py-7">
        <div className="flex flex-col items-start">
          <p className="text-5xl font-bold tracking-tighter text-[var(--color-neutral-0)] sm:text-7xl dark:text-[var(--color-neutral-800)]">
            {characters}
          </p>
          <p className="text-xl font-bold tracking-tighter text-[var(--color-neutral-0)] dark:text-[var(--color-neutral-800)]">
            Total Characters
          </p>
        </div>
      </div>

      <div className="word w-full rounded-xl bg-yellow-500 px-5 py-7 sm:px-3 sm:py-6 md:px-4 md:py-7">
        <div className="flex flex-col items-start">
          <p className="text-5xl font-bold tracking-tighter text-[var(--color-neutral-0)] sm:text-7xl dark:text-[var(--color-neutral-800)]">
            {words}
          </p>
          <p className="text-xl font-bold tracking-tighter text-[var(--color-neutral-0)] dark:text-[var(--color-neutral-800)]">
            Word Count
          </p>
        </div>
      </div>

      <div className="sentence w-full rounded-xl bg-orange-500 px-5 py-7 sm:px-3 sm:py-6 md:px-4 md:py-7">
        <div className="flex flex-col items-start">
          <p className="text-5xl font-bold tracking-tighter text-[var(--color-neutral-0)] sm:text-7xl dark:text-[var(--color-neutral-800)]">
            {sentence}
          </p>
          <p className="text-xl font-bold tracking-tighter text-[var(--color-neutral-0)] dark:text-[var(--color-neutral-800)]">
            Sentence Count
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
