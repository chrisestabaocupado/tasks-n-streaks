/* import styles from './ToDoInput.module.css'; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext, useEffect } from "react";
import { ToDoContext } from "../TodoList/ToDoContext";
import { StreakModeContext } from "../StreakMode/StreakModeContext";

const exampleStreakText = [
  "Beber 2 litros de agua",
  "Caminar 10,000 pasos",
  "Leer 10 páginas de un libro",
  "Meditar por 5 minutos",
  "Estudiar inglés por 20 minutos",
  "Hacer 30 flexiones",
  "Escribir en el diario",
  "Despertar antes de las 7am",
  "Practicar gratitud",
  "No consumir azúcar hoy",
];

const exampleToDoText = [
  "Comprar leche en el supermercado",
  "Enviar el informe al jefe",
  "Llamar a mamá",
  "Pagar la factura del agua",
  "Organizar el escritorio",
  "Responder correos pendientes",
  "Sacar la basura",
  "Hacer backup del proyecto",
  "Agendar cita médica",
  "Planificar la semana",
];

const ToDoInput = () => {
  const { todosDispatch } = useContext(ToDoContext);
  const { isStreakModeOn, streaksDispatch } = useContext(StreakModeContext);

  const [placeholder, setPlaceHolder] = useState(
    isStreakModeOn
      ? exampleStreakText[Math.floor(Math.random() * exampleStreakText.length)]
      : exampleToDoText[Math.floor(Math.random() * exampleToDoText.length)]
  );

  const [todo, setTodo] = useState("");
  const [streak, setStreak] = useState("");

  const handleInsert = () => {
    if (!isStreakModeOn) {
      if (!todo.trim()) return;
      todosDispatch({ type: "insert", todo: todo });
      setTodo("");
    } else {
      if (!streak.trim()) return;
      streaksDispatch({ type: "insert", streak: streak });
      setStreak("");
    }
  };

  useEffect(() => {
    setPlaceHolder(
      isStreakModeOn
        ? exampleStreakText[
            Math.floor(Math.random() * exampleStreakText.length)
          ]
        : exampleToDoText[Math.floor(Math.random() * exampleToDoText.length)]
    );
  }, [isStreakModeOn]);

  return (
    <div className="flex flex-row w-full h-12 rounded-lg ">
      <input
        type="text"
        className="w-full h-full px-4 focus:outline-none border rounded-tl-lg rounded-bl-lg text-light-text-primary border-light-accent hover:border-light-border focus:border-light-border dark:focus:border-dark-border dark:border-dark-accent dark:placeholder:text-dark-text-primary dark:text-dark-text-primary transition-all ease-in-out duration-300"
        id="todoInput"
        onKeyDown={(e) => {
          e.key === "Enter" && handleInsert();
        }}
        onChange={(e) =>
          isStreakModeOn ? setStreak(e.target.value) : setTodo(e.target.value)
        }
        placeholder={placeholder}
        value={isStreakModeOn ? streak : todo}
      />
      <button
        onClick={() => {
          handleInsert();
        }}
        className="w-min h-full px-3 rounded-tr-lg rounded-br-lg border hover:cursor-pointer text-light-text-secondary hover:text-light-text-primary border-light-accent hover:border-light-border dark:border-dark-accent dark:hover:border-dark-border dark:text-dark-text-secondary dark:hover:text-dark-text-primary transition-all ease-in-out duration-300"
      >
        <FontAwesomeIcon className="text-xl" icon={faPlus} />
      </button>
    </div>
  );
};

export { ToDoInput };
