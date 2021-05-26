import { createStore } from 'redux';
import { CHANGE_NAME, CHANGE_SECOND_NAME } from './actions';

const initialState = {
    todos : [
        {id: 1, title: 'task1', status: false},
        {id: 2, title: 'task2', status: false},
        {id: 3, title: 'task3', status: false},
        {id: 4, title: 'task4', status: false},
    ]
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, todos: [...state.todos, action.payload]}
        default:
            return state
    }
}
export const store = createStore(reducer, initialState)

const changeName = {
    type: CHANGE_NAME,
    payload: {id: 5, title: 'task5', status: false}
}

// const changeSecondName = {
//     type: CHANGE_SECOND_NAME,
//     payload: 'Ivanov'
// }

store.dispatch(changeName)
// store.dispatch(changeSecondName)