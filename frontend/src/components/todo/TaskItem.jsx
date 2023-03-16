import React, { useContext } from 'react'
import { ImBin } from "react-icons/im";
import { MdOutlineDoneOutline } from "react-icons/md";
import TodoContext from '../../context/TodoContext';



function TaskItem( {i,  item, deletTask, handelDone1, istrue }) {
    const {markTodoUsDone} = useContext(TodoContext)
    const {markTodoIsProg} = useContext(TodoContext)

  return (
    <div className="todo-info"style={{ backgroundColor: item.isDone?"#FFFBC1":"white" }}  >
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
            
                <button style={{ backgroundColor: item.isDone?"green":"rgb(52, 151, 232)" }} className="bt-prog" onClick={()=> markTodoUsDone(i) }>
                    Done
                </button>
            
        </div>
        <div className="true-icon">
            
                <button className="bt-prog"  onClick={()=> markTodoIsProg (i) } style={{ backgroundColor: item.isProgressing?"#F76E11":"rgb(52, 151, 232)" }}   >
                    Progressing
                </button>
           
               
            
        </div>
    </div>
</div>
  )
}

export default TaskItem
