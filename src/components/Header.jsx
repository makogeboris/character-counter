import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Tittle from "./Tittle";

function Header({ theme, toggleTheme }) {
  return (
    <header>
      <div className="mx-auto flex w-full max-w-[61.875rem] flex-col items-center gap-14 px-4 pt-4 pb-10 sm:px-8 sm:pt-[1.125rem] md:gap-12 md:pt-8 md:pb-12">
        <div className="flex w-full items-center justify-between">
          <Logo theme={theme} />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <Tittle />
      </div>
    </header>
  );
}

export default Header;
