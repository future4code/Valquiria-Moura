import { Industry } from "./industry";
import { Client } from "./client"
 
export class IndustrialClient extends Industry implements Client {

    constructor(
        public clientName: string, 
        public clientNumber: number,
        public consumedEnergy: number,
        industryName: string,
        industryNumber: string,
        cep: string,
        ) {
        super(industryName, industryNumber, cep)
    }

    calculateBill() {
        const faturaCliente: number = (this.consumedEnergy * 0.45) + 10000
        return faturaCliente
}

}