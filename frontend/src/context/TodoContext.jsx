import React, { createContext ,useState} from "react";
const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
    const [todos,setTodos]=useState([]);
    const addTodos=(item)=>{
        
   setTodos([...todos,item])
   console.log(todos);
    }

    return (
    <TodoContext.Provider
        value={{
            todos,
            setTodos,
            addTodos,
        }}>
     { children }
     </TodoContext.Provider>
      );
};
export default TodoContext;