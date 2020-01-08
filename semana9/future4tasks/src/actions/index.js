export const criarTarefaAction = (tarefa) => ({
    type: "CRIAR_TAREFA",
    payload: {
        tarefa,
    }
})