import { useEffect, useRef, useContext } from "react";
import { DropdownListContainer } from "./DropdownListContainer";
import { DropdownItem } from "./DropdownItem";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
/* import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"; */
import { StreakModeContext } from "../StreakMode/StreakModeContext";

const DropdownHabit = ({ setShowDropdown, id }) => {
  const { streaksDispatch } = useContext(StreakModeContext);
  // dropdownRef to close dropdown when clicking outside
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <DropdownListContainer
      ref={dropdownRef}
      onMouseLeave={() => setShowDropdown(false)}
    >
      {/* <DropdownItem icon={faPenToSquare} title="Editar Habito"></DropdownItem>
      <DropdownItem icon={faRotate} title="Reiniciar Racha"></DropdownItem> */}
      <DropdownItem
        onClick={() => {setShowDropdown(false); streaksDispatch({ type: "remove", key: id })}}
        className="text-red-500 hover:bg-red-500 hover:text-white"
        icon={faTrashCan}
        title="Eliminar Habito"
      ></DropdownItem>
    </DropdownListContainer>
  );
};

export { DropdownHabit };
