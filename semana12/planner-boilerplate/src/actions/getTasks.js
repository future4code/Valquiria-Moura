import axios from "axios";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-valquiria"

export const setTasks = (allTasks) => ({
    type: 'SET_TASKS',
    payload: {
        allTasks,
    }
})

export const getTasks = () => async (dispatch) => {
    
    try {
        const response = await axios.get(`${baseURL}`)
        dispatch(setTasks(response.data))

    } catch (error) {
        window.alert("Ocorreu um erro.")
    }
}

export default getTasks;