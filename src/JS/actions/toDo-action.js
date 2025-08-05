import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from "../actionTypes/toDo"

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


//action edit pour modifier une tache qui exist dans le tableau
export const editTask = (id, newDescription) => {
    return {
        type: EDIT_TASK,
        //payload dans ce cas un objet et na pas une simple information
        payload: {id, newDescription},
    };
};

//action TOGGLE - Done Undone tache
export const toggleTask = (id) => {
    return {
        type: TOGGLE_TASK,
        payload: id,
    };
};
