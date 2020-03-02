import { Employee } from "./employee"
import { Dish } from "./dish"

export class Cashier extends Employee {
    sayJob = () => 'cashier'

    calculateBill = (dishes: Dish []): number => {
        let total = 0
        for (let dish of dishes) {
            total += dish.price
        }
        return total 
    }
}
