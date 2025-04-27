import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownItem = ( {title, icon ,onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full flex flex-row gap-3 px-3 items-center hover:cursor-pointer text-light-text-primary hover:bg-light-secondary dark:text-dark-text-primary dark:hover:bg-dark-secondary">
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            <span>{title}</span>
        </button>
    )
}

export { DropdownItem }