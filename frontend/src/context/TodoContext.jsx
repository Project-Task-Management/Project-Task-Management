import React, { createContext, useState } from "react";
const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const addTodos = (item) => {
        const newTodo = { ...item, isDone: false, isProgressing: false };

        setTodos([...todos, newTodo]);
    };
    const markTodoUsDone = (i) => {
        const newTodos = [...todos]
        newTodos[i].isDone = !newTodos[i].isDone;
        setTodos(newTodos);
    };
    console.log(todos);

    return (
        <TodoContext.Provider
            value={{
                todos,
                setTodos,
                addTodos,
                markTodoUsDone,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
export default TodoContext;
