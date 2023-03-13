import React from 'react'
import { ImBin } from "react-icons/im";
import { MdOutlineDoneOutline } from "react-icons/md";

function TaskItem( {  item, deletTask, handelDone1, istrue }) {
  return (
    <div className="todo-info" >
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
  )
}

export default TaskItem
