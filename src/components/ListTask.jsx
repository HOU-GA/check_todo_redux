import React, { useState } from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import './ListTask.css' // Import du fichier CSS

const ListTask = () => {
  const tasks = useSelector(state => state.toDoReducer.tasks)
  const [taskFilter, setTaskFilter] = useState("ALL")

  return (
    <div className='task-container'>
      <div className='filter-buttons'>
        <Button 
          variant={taskFilter === "ALL" ? "primary" : "secondary"} 
          onClick={() => setTaskFilter("ALL")}
          className="filter-btn"
        >
          ALL
        </Button>
        <Button 
          variant={taskFilter === "DONE" ? "success" : "warning"} 
          onClick={() => setTaskFilter("DONE")}
          className="filter-btn"
        >
          DONE
        </Button>
        <Button 
          variant={taskFilter === "UNDONE" ? "danger" : "dark"} 
          onClick={() => setTaskFilter("UNDONE")}
          className="filter-btn"
        >
          UNDONE
        </Button>
      </div>
      
      <div className='tasks-list'>
        {taskFilter === 'UNDONE'
          ? tasks
              .filter(task => !task.isDone)
              .map(tsk => <Task key={tsk.id} task={tsk} />)
          : taskFilter === 'DONE'
          ? tasks
              .filter(task => task.isDone)
              .map(tsk => <Task key={tsk.id} task={tsk} />)
          : tasks.map(tsk => <Task key={tsk.id} task={tsk} />)
        }
      </div>
    </div>
  )
}

export default ListTask