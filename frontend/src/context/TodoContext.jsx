import React, { createContext, useState } from "react";
const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const addTodos = (item) => {
        const newTodo = { ...item, isDone: false, isProgressing: false }; //erweiterung von item of newTodos is done and progressing

        setTodos([...todos, newTodo]);
    };
    const markTodoUsDone = (i) => {
        const newTodos = [...todos]
        newTodos[i].isDone = !newTodos[i].isDone;  //changing color function 
        setTodos(newTodos);
    };
    console.log(todos);

    const markTodoIsProg = (i) => {
        const newTodos = [...todos]
        newTodos[i].isProgressing = !newTodos[i].isProgressing;  //changing color function 
        setTodos(newTodos);
    };

    



    return (
        <TodoContext.Provider
            value={{
                todos,
                setTodos,
                addTodos,
                markTodoUsDone, // function hinzufugst
                markTodoIsProg,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
export default TodoContext;
