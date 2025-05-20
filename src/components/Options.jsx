import { useTextAnalyzer } from "../contexts/TextAnalyzerContext";

function Options() {
  const {
    charLimit,
    setCharLimit,
    showCharLimit,
    handleCharLimitToggle,
    excludeSpaces,
    setExcludeSpaces,
    readingTime,
    text,
  } = useTextAnalyzer();

  const minutes = readingTime();

  const approxTime = !text
    ? "0 minute"
    : minutes < 1
      ? "< 1 minute"
      : `${minutes} minutes`;

  return (
    <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex items-center">
          <label
            className="custom-checkbox text-base tracking-tight text-neutral-800 dark:text-neutral-800"
            htmlFor="spaces"
          >
            <input
              checked={excludeSpaces}
              onChange={() => setExcludeSpaces(!excludeSpaces)}
              type="checkbox"
              id="spaces"
              className="custom-checkbox__input"
            />
            <span className="custom-checkbox__box custom-check__box-dark"></span>
            Exclude Spaces
          </label>
        </div>

        <div className="flex min-h-[2.125rem] items-center">
          <label
            className="custom-checkbox text-base tracking-tight text-neutral-800 dark:text-neutral-800"
            htmlFor="limit"
          >
            <input
              type="checkbox"
              id="limit"
              className="custom-checkbox__input"
              checked={showCharLimit}
              onChange={handleCharLimitToggle}
            />
            <span className="custom-checkbox__box custom-check__box-dark"></span>
            Set Character Limit
          </label>

          {showCharLimit && (
            <input
              className="ml-2.5 w-[55px] rounded-md border border-neutral-200 bg-neutral-100 p-1 text-base font-normal text-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 dark:border-neutral-200 dark:bg-neutral-100 dark:text-neutral-700"
              type="number"
              name="number"
              id="number"
              value={charLimit}
              onChange={(e) => setCharLimit(parseInt(e.target.value, 10) || 0)}
            />
          )}
        </div>
      </div>

      <p className="text-base leading-snug tracking-tight text-neutral-800 dark:text-neutral-800">
        Approx. reading time: {approxTime}
      </p>
    </div>
  );
}

export default Options;
