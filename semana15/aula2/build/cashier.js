"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
class Cashier extends employee_1.Employee {
    constructor() {
        super(...arguments);
        this.sayJob = () => 'cashier';
        this.calculateBill = (dishes) => {
            let total = 0;
            for (let dish of dishes) {
                total += dish.price;
            }
            return total;
        };
    }
}
exports.Cashier = Cashier;
//# sourceMappingURL=cashier.js.map