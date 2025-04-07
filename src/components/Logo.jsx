import logoDark from "../assets/images/logo-dark-theme.svg";
import logoLight from "../assets/images/logo-light-theme.svg";

function Logo({ theme }) {
  return (
    <a
      className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-purple-500)]"
      href="#"
    >
      <img
        className="xs:w-[15.3125rem] w-[11.5rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-purple-500)]"
        src={theme === "dark" ? logoDark : logoLight}
        alt="Character counter"
      />
    </a>
  );
}

export default Logo;
