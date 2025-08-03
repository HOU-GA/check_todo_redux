import {createStore} from "redux";
import rootReducer from "../reducers";

const store = createStore(rootReducer)

export default store

//1.45.53