//import

//import { addTask } from "../actions/toDo-action";
import { ADD_TASK, DELETE_TASK } from "../actionTypes/toDo";




//initialState
const initialState = {
    //on commence par un tableau vide : tasks:[] ou un tableau avec des données:
    tasks:[
        {   //id: Date.now(),
            id: Math.random(),
            description: "fair mes checkpoint",
            isDone: false
        },

        {
            id: Math.random(),
            description: "dddd",
            isDone: false
        }

    ]
}

//01.56.53

//pure Function

const toDoReducer =(state=initialState, {type, payload})=>{
    switch (type) {
        case ADD_TASK: return {
            //dans le payload il ya la nouvelle tache
            ...state, tasks:[...state.tasks, payload]

        };

        case DELETE_TASK:
        return {
            ...state, tasks:state.tasks.filter(task=>task.id !== payload)

        }
            
        default:
            return state;
    }

};
export default toDoReducer;