import axios from "axios";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/futureX/valquiria/trip"

export const setViagemSelecionada = (idDeViagem) => ({
    type: "SET_VIAGEM_SELECIONADA",
    payload : {
        idDeViagem,
    }

})

export const setCandidatos = (candidatos) => ({
    type: "SET_CANDIDATOS",
    payload: {
        candidatos,
    }
})

const axiosConfig = {
    headers: {
        "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzkyODU1ODd9.vQopLXIv6iMVzjZtAQCraUup3iDc0WH57nr_kxe_KXY"
    }
}

export const getCandidatos = (tripId) => async (dispatch) => {
    
    const response = await axios.get(
        `${baseURL}/${tripId}`, axiosConfig)
    dispatch(setCandidatos(response.data.trip.candidates))
    };
    
