import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggler = ({ theme, changeTheme }) => {
  const themeHandler = () => {
    changeTheme((prev) => {
      const newTheme =
        prev === "light" ? "dark" : prev === "dark" ? "light" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };
  return (
    <button
      className="w-12 border-2 px-3 py-2 rounded-xl text-xl hover:cursor-pointer border-light-accent hover:border-light-border text-light-text-secondary hover:text-light-text-primary dark:border-dark-accent dark:text-dark-text-secondary dark:hover:text-dark-text-primary transition-all ease-in-out duration-300"
      onClick={themeHandler}
    >
      {theme === "light" ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </button>
  );
};

export { ThemeToggler };
