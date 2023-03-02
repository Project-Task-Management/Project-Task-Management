import React, { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";
import { ImBin } from "react-icons/im";
import { MdOutlineDoneOutline } from "react-icons/md";

function Tasks() {
    const { todos, setTodos } = useContext(TodoContext);
    const [istrue, setIstrue] = useState(false);
    const done = true;
    const handelDone1 = () => {
        setIstrue(true);

        console.log("hallo");
    };
    const handelDone2 = () => {
        setIstrue(false);

        console.log("hallo");
    };
    const deletTask = (i) => {
        const newTodos = [...todos];
        newTodos.splice(i, 1);
        setTodos(newTodos);
    };
    return (
        <div className="zeig-task">
            {todos.map((item, i) => {
                return (
                    <div className="todo-info" key={i}>
                        <div>
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
                        <div>
                            <ImBin className="delet-Icon" onClick={() => deletTask(item.id)} />
                            <div className="true-icon">
                                {istrue ? (
                                    <MdOutlineDoneOutline onClick={() => handelDone2(item.id)} style={{ color: "green" }} />
                                ) : (
                                    <MdOutlineDoneOutline onClick={handelDone1} style={{ color: "black" }} />
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Tasks;
