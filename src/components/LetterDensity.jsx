function LetterDensity() {
  const overflow = true;

  return (
    <div className="flex flex-col gap-5">
      <p className="text-2xl font-semibold tracking-tighter text-[var(--color-neutral-0)] dark:text-[var(--color-neutral-800)]">
        Letter Density
      </p>

      <div className="flex w-full items-center justify-between gap-3.5">
        <p className="text-base font-normal tracking-tighter text-[var(--color-neutral-0)] dark:text-[var(--color-neutral-800)]">
          E
        </p>

        <progress
          value="40"
          max="100"
          class="custom-progress custom-progress-dark h-3 w-full"
        ></progress>

        <p className="flex items-center gap-1 text-base font-normal tracking-tighter text-[var(--color-neutral-0)] dark:text-[var(--color-neutral-800)]">
          40 <span>(16.0%)</span>
        </p>
      </div>

      {/* <p className="text-base font-normal tracking-tighter text-[var(--color-neutral-0)] dark:text-[var(--color-neutral-800)]">
        No characters found. Start typing to see letter density.
      </p> */}

      <button className="flex cursor-pointer items-center gap-2 self-start text-xl font-normal tracking-tighter text-[var(--color-neutral-0)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-purple-500)] dark:text-[var(--color-neutral-800)]">
        See {overflow ? "more" : "less"}
        {overflow ? (
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.71875 6.375L1.09375 1.78125C0.9375 1.65625 0.9375 1.40625 1.09375 1.25L1.71875 0.65625C1.875 0.5 2.09375 0.5 2.25 0.65625L6 4.34375L9.71875 0.65625C9.875 0.5 10.125 0.5 10.25 0.65625L10.875 1.25C11.0312 1.40625 11.0312 1.65625 10.875 1.78125L6.25 6.375C6.09375 6.53125 5.875 6.53125 5.71875 6.375Z"
              className="fill-[var(--color-neutral-200)] dark:fill-[var(--color-neutral-800)]"
            />
          </svg>
        ) : (
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.25 0.65625L10.875 5.21875C11.0312 5.375 11.0312 5.625 10.875 5.75L10.25 6.375C10.125 6.53125 9.875 6.53125 9.71875 6.375L6 2.6875L2.25 6.375C2.09375 6.53125 1.875 6.53125 1.71875 6.375L1.09375 5.75C0.9375 5.625 0.9375 5.375 1.09375 5.21875L5.71875 0.65625C5.875 0.5 6.09375 0.5 6.25 0.65625Z"
              className="fill-[var(--color-neutral-200)] dark:fill-[var(--color-neutral-800)]"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default LetterDensity;
