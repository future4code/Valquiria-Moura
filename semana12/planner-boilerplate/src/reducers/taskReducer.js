const initialState = {
    allTasks: [],
}

export const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_TASK":
            return {...state, allTasks: action.payload.text}
        default:
            return state;
    }
}