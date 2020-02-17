"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
let fs = require('fs');
const fileName = "contas.json";
const formatoPadrao = 'DD/MM/YYYY';
const cliente1 = {
    nome: "André",
    cpf: 12345678910,
    nasc: moment("21/08/1980", formatoPadrao),
};
const cliente2 = {
    nome: "Isabel",
    cpf: 98765432110,
    nasc: moment("16/06/2016", formatoPadrao),
};
const dataAtual = moment();
const diff1 = dataAtual.diff(cliente1.nasc, "years");
if (diff1 < 18) {
    console.log("Olá, ", cliente1.nome);
    console.log("Conta não permitida - Cliente menor de idade");
}
else {
    console.log("Olá, ", cliente1.nome);
    console.log("Conta permitida!");
}
const diff2 = dataAtual.diff(cliente2.nasc, "years");
if (diff2 < 18) {
    console.log("Olá, ", cliente2.nome);
    console.log("Conta não permitida - Cliente menor de idade");
}
else {
    console.log("Olá, ", cliente2.nome);
    console.log("Conta permitida!");
}
try {
    fs.writeFileSync(fileName, JSON.stringify(cliente1));
    console.log("Cliente 1 - Cadastrado do Sucesso!");
}
catch (err) {
    console.error(err);
}
//# sourceMappingURL=f4bank.js.map