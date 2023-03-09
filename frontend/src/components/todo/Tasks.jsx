import React, { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";
import { ImBin } from "react-icons/im";
import { MdOutlineDoneOutline } from "react-icons/md";

function Tasks() {
    // let donBt = document.querySelector('.Done-bt');
    // let progBt = document.querySelector('.progressing-bt');
    // donBt.addEventListener('click', () => donBt.style.backgroundColor = '#337ab7')
    // progBt.addEventListener('click', () => progBt.style.backgroundColor = '#c9302c')

    const { todos, setTodos } = useContext(TodoContext);
    const [istrue, setIstrue] = useState(false);

    const handelDone1 = (i) => {
        setIstrue(true);

        console.log("hallo");
    };
    const handelDone2 = (i) => {
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
                console.log(todos);
                return (
                    <div className="todo-info" key={i}>
                        <div className="title-delet">
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
                                {" "}
                                <ImBin className="delet-Icon" onClick={() => deletTask(item.id)} />
                            </div>
                        </div>
                        <div className="icon-button">
                            <div className="true-icon">
                                {istrue ? (
                                    <button style={{ backgroundColor: "black" }} className="bt-prog" onClick={(e, i) => handelDone1(e, i)}>
                                        Done
                                    </button>
                                ) : (
                                    <button style={{ backgroundColor: "red" }} className="bt-prog" onClick={(e, i) => handelDone1(e, i)}>
                                        Done
                                    </button>
                                )}
                            </div>
                            <div className="true-icon">
                                {istrue ? (
                                    <button className="bt-prog" onClick={() => console.log(istrue)}>
                                        Progressing
                                    </button>
                                ) : (
                                    <button className="bt-prog" onClick={() => console.log(istrue)}>
                                        Progressing
                                    </button>
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
