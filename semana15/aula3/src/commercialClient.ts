import { Commerce } from "./commerce";
import { Client } from "./client"
 
export class CommercialClient extends Commerce implements Client {

    constructor(
        public clientName: string, 
        public clientNumber: number,
        public consumedEnergy: number,
        name: string,
        cnpj: string,
        cep: string,
        ) {
        super(name, cnpj, cep)
    }

    calculateBill() {
        const faturaCliente: number = this.consumedEnergy * 0.53
        return faturaCliente
}

}