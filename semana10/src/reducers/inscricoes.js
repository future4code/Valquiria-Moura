const initialState = {
    idDeViagemSelecionada: "",
    candidatos: [],
}

const inscricoes = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_VIAGEM_SELECIONADA':
            return {...state,idDeViagemSelecionada: action.payload.idDeViagem}
        case 'SET_CANDIDATOS':
            return {...state,candidatos: action.payload.candidatos}
        default:
            return state
    }
}

export default inscricoes;