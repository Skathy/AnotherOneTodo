export const ADD_TODO = 'ADD_TODO'
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    }
}

export const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    }
}

export const CHECKED = 'CHECKED'
export const checked = (payload) => {
    return {
        type: CHECKED,
        payload,
    }
}

export const GET_TODOS = 'GET_TODOS'
export const getTodos = (payload) => {
    return {
        type: GET_TODOS,
        payload
    }
}

export const EDIT_TODO = 'EDIT_TODO'
export const editTodo = (payload) => {
    return {
        type: EDIT_TODO,
        payload
    }
}