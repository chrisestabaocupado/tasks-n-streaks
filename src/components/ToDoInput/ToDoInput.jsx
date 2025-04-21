/* import styles from './ToDoInput.module.css'; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ToDoInput = ({todosDispatch}) => {
    const [todo, setTodo] = useState("");

    const handleInsert = () => {
        todosDispatch({ type: 'insert', todo: todo })
        setTodo("");
    };

    return (
        <div className="flex flex-row w-full border border-gray-300 rounded-lg ">
            <input 
                type="text"
                className="w-full px-4 focus:outline-none focus:ring-1 focus:ring-gray-400 rounded-tl-lg rounded-bl-lg"
                id="todoInput"
                onKeyDown={(e) => { e.key === "Enter" && handleInsert(); }}
                onChange={e => setTodo(e.target.value)}
                placeholder="Escribe una nueva tarea"
                value={todo}
            />
            <button 
                onClick={() => { 
                    handleInsert();
                }}
                className="bg-black text-white rounded-tr-lg rounded-br-lg p-3 hover:cursor-pointer hover:bg-gray-800 transition-colors duration-300 ease-in-out">
                <FontAwesomeIcon className="text-xl" icon={faPlus} />
            </button>
        </div>
    )
}

export {ToDoInput};