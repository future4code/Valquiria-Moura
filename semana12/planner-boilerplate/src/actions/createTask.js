import axios from "axios";
import  fetchTasks  from "./getTasks";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-valquiria"

export const createTask = (task, week) => async (dispatch) => {
    
    const newTaskInfo = {
        task: task,
        week: week,
    }
    
    try {
        const response = await axios.post(`${baseURL}`, newTaskInfo)
        console.log(response)
        dispatch(fetchTasks())
        window.alert("Tarefa incluída com sucesso!")


    } catch (error) {
        console.log(error)
        window.alert("Não foi possível incluir sua tarefa!")
    }
}