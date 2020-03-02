import { SaltyDish } from "./saltydish";
import { Dessert } from "./dessert";
import { Dish } from "./dish";
import { Cashier } from "./cashier";
import { Manager } from "./manager";
import { Employee } from "./employee";

const estrogonofe = new SaltyDish(100, 20, ["frango"], 40)
const lasanha = new SaltyDish(60, 10, ["macarrão"], 20)

const pamonha = new Dessert(50, 25, ["milho"], 20, 2)
const carolina = new Dessert(25, 12, ["chocolate"], 10, 10)

const menu: Dish [] = [estrogonofe, lasanha, pamonha, carolina]

const caixa: Cashier = new Cashier("Mateus", 1500)

const gerente: Manager = new Manager("Mari", 3000)

console.log(Employee.qtdeFuncionarios)