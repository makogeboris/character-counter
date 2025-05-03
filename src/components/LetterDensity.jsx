import { useState } from "react";

function LetterDensity({ showDensity, isTextEmpty, density }) {
  const [showAll, setShowAll] = useState(false);

  function toggleText() {
    setShowAll((prev) => !prev);
  }

  return (
    <div className="flex flex-col gap-5">
      <p className="text-neutral-0 text-2xl font-semibold tracking-tighter dark:text-neutral-800">
        Letter Density
      </p>

      {isTextEmpty && (
        <p className="text-neutral-0 text-base font-normal tracking-tighter dark:text-neutral-800">
          No characters found. Start typing to see letter density.
        </p>
      )}

      {showDensity && (
        <>
          <div className="flex flex-col gap-3">
            {(showAll ? density : density.slice(0, 5)).map((item) => (
              <div
                key={item.letter}
                className="flex w-full items-center justify-between gap-4.5"
              >
                <p className="text-neutral-0 min-w-4 text-base font-normal tracking-tighter dark:text-neutral-800">
                  {item.letter}
                </p>

                <progress
                  aria-label={`Letter ${item.letter} frequency`}
                  value={item.percent}
                  max="100"
                  className="custom-progress h-3 w-full max-w-[49.6875rem]"
                ></progress>

                <p className="text-neutral-0 flex min-w-[5.625rem] items-center justify-end gap-1 text-base font-normal tracking-tighter dark:text-neutral-800">
                  {item.count} <span>({item.percent}%)</span>
                </p>
              </div>
            ))}
          </div>

          {density.length > 5 && (
            <button
              onClick={toggleText}
              className="text-neutral-0 flex cursor-pointer items-center gap-2 self-start text-xl font-normal tracking-tighter focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 dark:text-neutral-800"
            >
              See {showAll ? "less" : "more"}
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={
                    showAll
                      ? "M6.25 0.65625L10.875 5.21875C11.0312 5.375 11.0312 5.625 10.875 5.75L10.25 6.375C10.125 6.53125 9.875 6.53125 9.71875 6.375L6 2.6875L2.25 6.375C2.09375 6.53125 1.875 6.53125 1.71875 6.375L1.09375 5.75C0.9375 5.625 0.9375 5.375 1.09375 5.21875L5.71875 0.65625C5.875 0.5 6.09375 0.5 6.25 0.65625Z"
                      : "M5.71875 6.375L1.09375 1.78125C0.9375 1.65625 0.9375 1.40625 1.09375 1.25L1.71875 0.65625C1.875 0.5 2.09375 0.5 2.25 0.65625L6 4.34375L9.71875 0.65625C9.875 0.5 10.125 0.5 10.25 0.65625L10.875 1.25C11.0312 1.40625 11.0312 1.65625 10.875 1.78125L6.25 6.375C6.09375 6.53125 5.875 6.53125 5.71875 6.375Z"
                  }
                  className="fill-neutral-200 dark:fill-neutral-800"
                />
              </svg>
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default LetterDensity;
