"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const residentialClient_1 = require("./residentialClient");
const commercialClient_1 = require("./commercialClient");
const industrialClient_1 = require("./industrialClient");
const clienteRes1 = new residentialClient_1.ResidentialClient("André", 123, 10, "Casa André", "12345678910", "01234569");
const clienteRes2 = new residentialClient_1.ResidentialClient("Valentina", 124, 20, "Prédio Tina", "98765432110", "98765412");
const clienteCom1 = new commercialClient_1.CommercialClient("Nubank", 125, 30, "Prédio Nubank", "2518946515", "81891948");
const clienteCom2 = new commercialClient_1.CommercialClient("Mercedes", 126, 40, "Prédio Mercedes", "2516546515", "82091948");
const clienteInd1 = new industrialClient_1.IndustrialClient("Bombril", 127, 50, "Prédio Bombril", "321", "32165499");
const clienteInd2 = new industrialClient_1.IndustrialClient("Ford", 128, 60, "Prédio Ford", "322", "23652972");
console.log(clienteInd1.calculateBill());
//# sourceMappingURL=index.js.map