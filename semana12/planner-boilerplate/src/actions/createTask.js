import axios from "axios";
import  fetchPosts  from "./getTasks";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-valquiria"

export const createTask = (task, week) => async (dispatch) => {
    
    const newTaskInfo = {
        task: task,
        week: week,
    }
 //Parei aqui, perguntar à respeito dos headers. Na documentação não tem auth, posso fazer sem esse config então?
    const config = {
        headers: {
          auth: token
        }
      }
    
    try {
        const response = await axios.post(`${baseURL}/posts`, newPostInfo, config)
        console.log(response)
        dispatch(fetchPosts())
        window.alert("Post enviado com sucesso!")


    } catch (error) {
        console.log(error)
        window.alert("Não foi possível enviar o post")
    }
}