import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"

//Para evitar atrapalhar a leitura do código, URL salva em uma variável
const baseURL = "https://dequ78ivp1.execute-api.us-east-1.amazonaws.com/v1"


export const signUp = (username, email, password) => async (dispatch) => {

    const signUpInfo = {
        username: username,
        email: email,
        password: password
    };

    try {
        const response = await axios.post(`${baseURL}/signup`, signUpInfo)

        window.localStorage.setItem("token", response.data.token);

        dispatch(push(routes.feedPage))

    } catch (error) {
        window.alert("Não foi possível realizar o cadastro")
    }
}