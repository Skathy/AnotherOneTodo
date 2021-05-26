const initialState = {
    todos: {}
}

export default(state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            return {
                ...state,
                todos: action.payload
            }
        }
    }
}