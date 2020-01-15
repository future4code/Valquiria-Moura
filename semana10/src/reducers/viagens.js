const initialState = {
    todasAsViagens: [],
}

const viagens = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_VIAGENS':
            return {...state,todasAsViagens: action.payload.viagens}
        default:
            return state
    }
}

export default viagens;