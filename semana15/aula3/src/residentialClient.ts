import { Residence } from "./residence";
import { Client } from "./client"
 
export class ResidentialClient extends Residence implements Client {

    constructor(
        public clientName: string, 
        public clientNumber: number,
        public consumedEnergy: number,
        name: string,
        cpf: string,
        cep: string,
        ) {
        super(name, cpf, cep)
    }

    calculateBill() {
        const faturaCliente: number = this.consumedEnergy * 0.75
        return faturaCliente
}

}