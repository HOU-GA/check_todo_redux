import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

const ListTask = () => {
  
  const tasks = useSelector (state=> state.toDoReducer.tasks)
  console.log(tasks)
    return (
    <div className='container'>
     {tasks.map(tsk => <Task key={tsk.id} task={tsk}/>)} 
    </div>
  )
}

export default ListTask
