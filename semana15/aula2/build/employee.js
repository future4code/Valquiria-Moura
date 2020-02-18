"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
        Employee.qtdeFuncionarios++;
    }
}
exports.Employee = Employee;
Employee.qtdeFuncionarios = 0;
//# sourceMappingURL=employee.js.map