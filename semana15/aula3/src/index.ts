import { ResidentialClient } from "./residentialClient";
import { CommercialClient } from "./commercialClient";
import { IndustrialClient } from "./industrialClient";


const clienteRes1 = new ResidentialClient("André", 123, 10, "Casa André", "12345678910", "01234569")
const clienteRes2 = new ResidentialClient("Valentina", 124, 20, "Prédio Tina", "98765432110", "98765412")

const clienteCom1 = new CommercialClient("Nubank",125, 30, "Prédio Nubank", "2518946515", "81891948")
const clienteCom2 = new CommercialClient("Mercedes",126, 40, "Prédio Mercedes", "2516546515", "82091948")

const clienteInd1 = new IndustrialClient("Bombril", 127, 50, "Prédio Bombril", "321", "32165499")
const clienteInd2 = new IndustrialClient("Ford", 128, 60, "Prédio Ford", "322", "23652972")
