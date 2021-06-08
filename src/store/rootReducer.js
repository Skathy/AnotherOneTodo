import { combineReducers } from "redux";
import todos from './todo-list/reducers'

export default combineReducers({
    todos,
})