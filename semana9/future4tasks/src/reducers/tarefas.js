const initialState = {
    todo: [
        {
          id: 1,
          done: false,
          text: "Usar Redux"
        },
        {
          id: 2,
          done: true,
          text: "Preencher feedback do dia"
        }
      ],
};

export const tarefasReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADICIONAR_TAREFA":
            const novaListaTarefas = [...state.todo, action.payload.tarefa]    
            return {...state, todo: novaListaTarefas};
        default:
            return state;
    }
}