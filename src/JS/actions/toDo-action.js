import { ADD_TASK, DELETE_TASK } from "../actionTypes/toDo"

//action pour rajouter une tache : ADD TASK
export const addTask = (newTask) => {

    return {
        type: ADD_TASK,
        payload: newTask
    };
};

//action pour supprimer une tache du tableau
export const deleteTask = (id) =>{
    return {
        type: DELETE_TASK,
        payload: id,

    };
};