import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-light-primary dark:bg-dark-primary sticky bottom-0 tex-lg text-light-text-secondary dark:text-dark-text-secondary py-4 flex flex-row gap-2 mt-auto justify-center items-center">
      <span>Made with</span>
      <FontAwesomeIcon
        className="text-light-text-primary dark:text-dark-text-primary"
        icon={faHeart}
      />
      <span>by Christopher Glood</span>
    </footer>
  );
};

export { Footer}
