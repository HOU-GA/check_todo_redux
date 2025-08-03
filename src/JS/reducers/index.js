import { combineReducers } from "redux";
import toDoReducer from "./toDo-reducer";

const rootReducer = combineReducers({toDoReducer})

export default rootReducer