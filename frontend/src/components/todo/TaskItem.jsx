import React, { useContext } from 'react'
import { ImBin } from "react-icons/im";
import { GrEdit } from "react-icons/gr";
import TodoContext from '../../context/TodoContext';



function TaskItem( {i,  item, deletTask, handelDone1, istrue }) {
    const {markTodoUsDone} = useContext(TodoContext)
    const {markTodoIsProg} = useContext(TodoContext)

  return (
    <div className="todo-info" style={{ backgroundColor: item.isProgressing?"#E7B10A":"rgba(255, 255, 255, 0.406)" }}   >
    <div className="title-delet">
        <div className='text-text'>
            <div className='text-spans'>  
            <p >
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
        <div className='del-Edi'>
            {""}
            <ImBin className="delet-Icon" onClick={() => deletTask(item.id)} />
            <GrEdit className="edi-Icon"/>

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
