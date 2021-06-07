export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CHECKED = 'CHECKED'
export const GET_TODOS = 'GET_TODOS'

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    }
}

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    }
}

export const checked = (payload) => {
    return {
        type: CHECKED,
        payload,
    }
}

export const getTodos = (payload) => {
    return {
        type: GET_TODOS,
        payload
    }
}

//^17.0.2