"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const residence_1 = require("./residence");
class ResidentialClient extends residence_1.Residence {
    constructor(clientName, clientNumber, consumedEnergy, name, cpf, cep) {
        super(name, cpf, cep);
        this.clientName = clientName;
        this.clientNumber = clientNumber;
        this.consumedEnergy = consumedEnergy;
    }
    calculateBill() {
        const faturaCliente = this.consumedEnergy * 0.75;
        return faturaCliente;
    }
}
exports.ResidentialClient = ResidentialClient;
//# sourceMappingURL=residentialClient.js.map