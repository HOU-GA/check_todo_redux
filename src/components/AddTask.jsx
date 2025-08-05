import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../JS/actions/toDo-action'
import './AddTask.css' // Import du fichier CSS

const AddTask = () => {
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (description.trim() === '') {
            return alert('Veuillez saisir une tâche valide')
        }

        const newTask = {
            id: Math.random(),
            description,
            isDone: false
        }

        dispatch(addTask(newTask))
        setDescription('')
    }

    return (
        <div className='add-task-container'>
            <Form onSubmit={handleSubmit} className='task-form'>
                <Form.Group controlId="taskDescription">
                    <Form.Control 
                        type="text" 
                        placeholder="Entrez votre tâche..." 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='task-input'
                    />
                </Form.Group>

                <Button 
                    variant="primary" 
                    type="submit"
                    className='submit-btn'
                >
                    ADD
                </Button>
            </Form>
        </div>
    )
}

export default AddTask