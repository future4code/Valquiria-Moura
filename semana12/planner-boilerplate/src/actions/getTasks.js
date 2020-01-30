import axios from "axios";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-valquiria"

export const setTask = (text) => ({
    type: 'SET_TASK',
    payload: {
        text,
    }
})

export const getTasks = (id) => async (dispatch) => {
    
    try {
        const response = await axios.get(`${baseURL}/${id}`)
        dispatch(setTask(response.data.text))

    } catch (error) {
        window.alert("Ocorreu um erro.")
    }
}

export default getTasks;