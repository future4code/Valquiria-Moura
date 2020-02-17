const initialState = {
    allTasks: [],
}

export const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_TASKS":
            return {...state, allTasks: action.payload.allTasks}
        default:
            return state;
    }
}