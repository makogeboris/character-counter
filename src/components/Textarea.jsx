function Textarea() {
  return (
    <div className="flex flex-col gap-3">
      <textarea
        rows={4}
        name="comment"
        id="comment"
        placeholder="Start typing here… (or paste your text)"
        className="w-full resize-none rounded-xl border border-[var(--color-neutral-700)] bg-[var(--color-neutral-600)] p-4 text-xl font-normal text-[var(--color-neutral-200)] focus-visible:outline-2 focus-visible:outline-[var(--color-purple-500)] sm:p-5 dark:border-[var(--color-neutral-100)] dark:bg-[var(--color-neutral-200)] dark:text-[var(--color-neutral-700)]"
      ></textarea>

      {/* <div className="flex items-center gap-2">
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1.34375C3.71875 1.34375 1.09375 3.99609 1.09375 7.25C1.09375 10.5312 3.71875 13.1562 7 13.1562C10.2539 13.1562 12.9062 10.5312 12.9062 7.25C12.9062 3.99609 10.2266 1.34375 7 1.34375ZM7 0.46875C10.7188 0.46875 13.7812 3.53125 13.7812 7.25C13.7812 10.9961 10.7188 14.0312 7 14.0312C3.25391 14.0312 0.21875 10.9961 0.21875 7.25C0.21875 3.53125 3.25391 0.46875 7 0.46875ZM6.01562 9.875H6.34375V6.59375H6.01562C5.82422 6.59375 5.6875 6.45703 5.6875 6.26562V6.04688C5.6875 5.88281 5.82422 5.71875 6.01562 5.71875H7.32812C7.49219 5.71875 7.65625 5.88281 7.65625 6.04688V9.875H7.98438C8.14844 9.875 8.3125 10.0391 8.3125 10.2031V10.4219C8.3125 10.6133 8.14844 10.75 7.98438 10.75H6.01562C5.82422 10.75 5.6875 10.6133 5.6875 10.4219V10.2031C5.6875 10.0391 5.82422 9.875 6.01562 9.875ZM7 3.3125C7.46484 3.3125 7.875 3.72266 7.875 4.1875C7.875 4.67969 7.46484 5.0625 7 5.0625C6.50781 5.0625 6.125 4.67969 6.125 4.1875C6.125 3.72266 6.50781 3.3125 7 3.3125Z"
            className="fill-[var(--color-orange-800)] dark:fill-[var(--color-orange-500)]"
          />
        </svg>

        <p className="text-base leading-snug tracking-tight text-[var(--color-orange-800)] dark:text-[var(--color-orange-500)]">
          Limit reached! Your text exceeds 300 characters.
        </p>
      </div> */}
    </div>
  );
}

export default Textarea;
