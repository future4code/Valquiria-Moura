export const adicionarTarefa = (novaTarefa) => {
    return {
        type: "ADICIONAR_TAREFA",
        payload: {
            novaTarefa: novaTarefa
        }
    };
};