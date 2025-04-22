import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RectangleButton = ({icon, text}) => {
  return (
    <button className="flex flex-row px-3 py-2 gap-3 cursor-pointer items-center border rounded-lg border-light-accent hover:border-light-border text-light-text-secondary hover:text-light-text-primary dark:border-dark-accent dark:hover:border-dark-border dark:text-dark-text-secondary dark:hover:text-dark-text-primary transition-all ease-in-out duration-500">
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </button>
  );
};

export { RectangleButton }