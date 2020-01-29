import axios from "axios";

const setViagens = (viagens) => ({
    type: "SET_VIAGENS",
    payload : {
        viagens
    }

})

export const getTrips = () => async (dispatch) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureX/valquiria/trips")
    console.log(response.data.trips)
    dispatch(setViagens(response.data.trips))
}