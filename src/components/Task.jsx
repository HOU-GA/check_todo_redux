import { Accordion, Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask, toggleTask } from '../JS/actions/toDo-action'
import { useState } from 'react'
import './Task.css' // Import du fichier CSS

const Task = ({ task }) => {
  const dispatch = useDispatch()
  const [newDescription, setNewDescription] = useState(task.description)
  const [show, setShow] = useState(false)

  const handleDelete = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
      dispatch(deleteTask(task.id))
    }
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(editTask(task.id, newDescription))
    handleClose()
  }

  return (
    <div className='task-item'>
      <Accordion>
      <Accordion.Item eventKey="0" className={`task-accordion ${task.isDone ? 'done' : ''}`}>
  <Accordion.Header className='task-header'>
    <span className={`task-title ${task.isDone ? 'completed' : ''}`}>
      {task.description}
    </span>
  </Accordion.Header>
  <Accordion.Body className='task-body'>
            <div className='task-actions'>
              <Button 
                variant={task.isDone ? 'outline-success' : 'success'} 
                onClick={() => dispatch(toggleTask(task.id))}
                className='action-btn'
              >
                {task.isDone ? "UNDONE" : "DONE"}
              </Button>
              
              <Button variant="info" onClick={handleShow} className='action-btn'>
                EDIT
              </Button>
              
              <Button variant='danger' onClick={handleDelete} className='action-btn'>
                DELETE
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Modal show={show} onHide={handleClose} className='task-modal'>
        <Modal.Header closeButton className='modal-header'>
          <Modal.Title>Modifier la tâche</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control 
            type="text" 
            placeholder="Nouvelle description" 
            value={newDescription} 
            onChange={(e) => setNewDescription(e.target.value)}
            className='edit-input'
          />
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <Button variant="secondary" onClick={handleClose} className='modal-btn'>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleEdit} className='modal-btn save-btn'>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Task