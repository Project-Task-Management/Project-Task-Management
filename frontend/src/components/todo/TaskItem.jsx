import React, { useContext } from "react";
import { ImBin } from "react-icons/im";
import { GrEdit } from "react-icons/gr";
import TodoContext from "../../context/TodoContext";
import { Button } from "react-bootstrap";

import axios from "axios";

function TaskItem({ i, item, handelDone1, istrue, todos, setTodos }) {
    const { markTodoUsDone } = useContext(TodoContext);
    const { markTodoIsProg } = useContext(TodoContext);
    const fetchTasks = async () => {
        const response = await axios.get("http://localhost:7897/todo");
        console.log("delete response", response.data);
        setTodos(response.data);
    };

    const deletTask = () => {
        axios.delete(`http://localhost:7897/todo/${item._id}`).then(fetchTasks);
    };

    return (
        <div
            className="todo-info"
            style={{
                backgroundColor: item.isProgressing
                    ? "rgba(192, 159, 102, 0.738)"
                    : item.isDone
                    ? "rgba(127, 196, 137, 0.598)"
                    : "white",
            }}
        >
           
                <div className="add-card">
                    <div className="text-text">
                        <div className="text-spans">
                            <p>
                                {" "}
                                <span>Title:</span>
                                {item.title}
                            </p>
                            <p>
                                {" "}
                                <span>Tasks:</span>
                                {item.tasks}
                            </p>
                        </div>
                    </div>
                    <div className="del-Edi">
                        {""}
                        <ImBin className="delet-Icon" onClick={deletTask} />
                        <GrEdit className="edi-Icon" />
                    </div>
                </div>
                <div className="icon-button">
                    <div className="true-icon">
                        {/* style={{ backgroundColor: item.isDone?"green":"rgb(52, 151, 235)" }} */}
                        <Button
                           
                            onClick={() => markTodoUsDone(i)}
                        >
                            Done
                        </Button>
                    </div>
                    <div className="true-icon">
                        {/* style={{ backgroundColor: item.isProgressing?"#F76E11":"rgb(56, 151, 232)" }}  */}
                        <Button
                            
                            onClick={() => markTodoIsProg(i)}
                        >
                            Progressing
                        </Button>
                    </div>
                </div>
            </div>
     
    );
}

export default TaskItem;
