const initialState = {
    listaTarefas: []
};

const tarefas = (state = initialState, action) => {
    switch (action.type) {
        case "ADICIONAR_TAREFA":
            return {...state, listaTarefas: [...state.listaTarefas, action.payload.novaTarefa]};
        default:
            return state;
    }
};

export default tarefas;