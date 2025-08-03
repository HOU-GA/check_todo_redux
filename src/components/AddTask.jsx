import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/actions/toDo-action';

const AddTask = () => {
    //useStateSnippet : recuperer donnee saisir dans la zone de texte description
    const [description, setDescription] = useState('');
    
    //hook useDispatch pour declancher l'action
    const dispatch = useDispatch()
    //console.log(description)
    const handleSubmit=(e)=>{
        //empecher le formulaire de se charger
        e.preventDefault();
        
        //validation pour input description
        if(description.trim()==='') 
            return alert('Vous devez ecrire une tache')
        const newtask={
            id:Math.random(),
            description,
            isDone: false
        }
       //declancher l'action pour rajouter la tache en fin du tableau
        dispatch(addTask(newtask));

        //vider l'input
        setDescription('');

    }
  return (
    <div className='container m-5'>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/**zone de texte description */}
        <Form.Control type="text" placeholder="Description" 
        value={description}
        onChange={(e)=>{setDescription(e.target.value);}} />
        
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
    </div>
  )
}

export default AddTask
