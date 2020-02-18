"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const saltydish_1 = require("./saltydish");
const dessert_1 = require("./dessert");
const cashier_1 = require("./cashier");
const manager_1 = require("./manager");
const employee_1 = require("./employee");
const estrogonofe = new saltydish_1.SaltyDish(100, 20, ["frango"], 40);
const lasanha = new saltydish_1.SaltyDish(60, 10, ["macarrão"], 20);
const pamonha = new dessert_1.Dessert(50, 25, ["milho"], 20, 2);
const carolina = new dessert_1.Dessert(25, 12, ["chocolate"], 10, 10);
const menu = [estrogonofe, lasanha, pamonha, carolina];
const caixa = new cashier_1.Cashier("Mateus", 1500);
const gerente = new manager_1.Manager("Mari", 3000);
console.log(employee_1.Employee.qtdeFuncionarios);
//# sourceMappingURL=index.js.map