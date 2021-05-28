import { ADD_TODO, DELETE_TODO, CHECKED } from './actions';

const initialState = {
    todos: []
}

export default ( state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        }
        case DELETE_TODO: {
            return {
                todos: [
                    ...state.todos.filter(todo => todo !== action.payload)
                ]
            }
        }
        case CHECKED: {
            return {
                ...state,
                todos: [
                   ...state.todos.map( todo => {
                       if (todo.id === action.payload) {
                           return {
                               ...todo, complete: !todo.complete
                           }
                       } else {
                           return todo
                       }
                   })
                ]
        }
    }
            default:  return state
    }
}