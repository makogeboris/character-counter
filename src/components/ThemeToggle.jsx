import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";

function ThemeToggle({ theme, toggleTheme }) {
  const icon = theme === "dark" ? sun : moon;
  const label =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      onClick={toggleTheme}
      aria-label={label}
      className="xs:size-11 flex size-8 cursor-pointer items-center justify-center rounded-md bg-[var(--color-neutral-100)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-purple-500)] dark:bg-[var(--color-neutral-200)]"
    >
      <img src={icon} alt={label} className="" />
    </button>
  );
}

export default ThemeToggle;
