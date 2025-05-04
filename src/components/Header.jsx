import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

function Header({ theme, toggleTheme }) {
  return (
    <header>
      <div className="mx-auto flex w-full max-w-[61.875rem] flex-col items-center gap-14 px-4 pt-4 pb-10 sm:px-8 sm:pt-[1.125rem] md:gap-12 md:pt-8 md:pb-12">
        <div className="flex w-full items-center justify-between">
          <Logo theme={theme} />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <h1 className="max-w-[30rem] text-center text-5xl font-bold tracking-tighter text-neutral-800 sm:text-7xl dark:text-neutral-800">
          Analyze your text in real-time.
        </h1>
      </div>
    </header>
  );
}

export default Header;
