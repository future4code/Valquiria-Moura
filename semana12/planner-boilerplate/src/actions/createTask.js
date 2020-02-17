import axios from "axios";
import  getTasks  from "./getTasks";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-valquiria"

export const createTask = (text, day) => async (dispatch) => {
    
    const newTaskInfo = {
        text: text,
        day: day,
    }
    
    try {
        const response = await axios.post(`${baseURL}`, newTaskInfo)
        console.log(response)
        dispatch(getTasks(response.data.id))
        window.alert("Tarefa incluída com sucesso!")


    } catch (error) {
        console.log(error)
        window.alert("Não foi possível incluir sua tarefa!")
    }
}