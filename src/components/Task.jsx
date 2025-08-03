import React from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../JS/actions/toDo-action'

const Task = ({task}) => {
  const dispatch = useDispatch()  
  return (
    <div>
     <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{task.description}</Accordion.Header>
        <Accordion.Body>
          {/**bouton pour done edit delete */}
          <Button variant='success'>DONE</Button>
          <Button variant='info'>EDIT</Button>
          
          {/**pour supprimer une tache */}
          <Button variant='danger' onClick={()=>{
            if (window.confirm('voulez vous supprimer cette tache'))
            dispatch(deleteTask(task.id))}}>DELETE</Button>

        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>

    </div>
  )
}

export default Task
