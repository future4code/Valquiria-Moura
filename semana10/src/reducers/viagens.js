const initialState = {
    todasAsViagens: [],
}

const viagens = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_VIAGENS':
            console.log(action.payload.viagens)
            return {...state,todasAsViagens: action.payload.viagens}
        default:
            return state
    }
}

export default viagens;