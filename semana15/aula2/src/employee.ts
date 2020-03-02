export abstract class Employee {
    nome: string
    salario: number
    static qtdeFuncionarios: number = 0

    constructor(nome: string, salario: number) {
        this.nome = nome
        this.salario = salario
        Employee.qtdeFuncionarios ++
    }

    abstract sayJob(): string
}