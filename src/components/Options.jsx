function Options({
  charLimit,
  setCharLimit,
  showCharLimit,
  handleCharLimitToggle,
  excludeSpaces,
  setExcludeSpaces,
  readingTime,
  text,
}) {
  const approxTime = !text
    ? "0 minute"
    : readingTime < 1
      ? "< 1 minute"
      : `${readingTime} minutes`;

  return (
    <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex items-center">
          <label
            className="custom-checkbox text-neutral-0 text-base tracking-tight dark:text-neutral-800"
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
            className="custom-checkbox text-neutral-0 text-base tracking-tight dark:text-neutral-800"
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
              className="text-neutral-0 dark:bg-neutral-0 ml-2.5 w-[55px] rounded-md border border-neutral-200 bg-neutral-900 p-1 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 dark:border-neutral-900 dark:text-neutral-700"
              type="number"
              name="number"
              id="number"
              value={charLimit}
              onChange={(e) => setCharLimit(parseInt(e.target.value, 10) || 0)}
            />
          )}
        </div>
      </div>

      <p className="text-neutral-0 text-base leading-snug tracking-tight dark:text-neutral-800">
        Approx. reading time: {approxTime}
      </p>
    </div>
  );
}

export default Options;
