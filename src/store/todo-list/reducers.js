import { ADD_TODO, DELETE_TODO, CHECKED, GET_TODOS } from './actions';

const initialState = {
    todos: []
}

export default ( state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS: {
            return {
                ...state,
                todos: action.payload
            }
        }
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        }
        case DELETE_TODO: {
            return {
                ...state,
                todos: action.payload
            }
        }
        case CHECKED: {
            return {
                ...state,
                todos: action.payload
            }
        }
            default:  return state
    }
}