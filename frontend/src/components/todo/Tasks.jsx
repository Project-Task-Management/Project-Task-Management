import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import { ImBin } from "react-icons/im";

function Tasks() {
    const { todos, setTodos } = useContext(TodoContext);
    const deletTask=(id)=>{
      let items = todos.filter((item)=>{
        return item.id !== id 
      })
      setTodos(items)
    }
    return (
        <div>
            {todos.map((item, i) => {
                return (
                    <div className="todo-info" key={i}>
                        <div>
                            <p> <span>Title:</span>{item.title}</p>
                            <p> <span>Tasks:</span>{item.tasks}</p>
                        </div>
                        <ImBin className="delet-Icon" onClick={ ()=> deletTask(item.id)}/>
                    </div>
                );
            })}
        </div>
    );
}

export default Tasks;
