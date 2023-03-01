
import React from 'react'
import { useState } from 'react'
import Buton, { SelectButton } from './Buton'
import TodoModal from './TodoModal'

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='appHeader'>
       
        <Buton onClick={()=> setModalOpen(true)} variant='primary'>Add Task</Buton>
<SelectButton id="status">
    <option value="All">All</option>
    <option value="incomplete">incomplete</option>
    <option value="complete">complete</option>
</SelectButton>
<TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}

export default AppHeader