"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dish {
    constructor(price, cost, ingredients, preparationTime) {
        this.price = price;
        this.cost = cost;
        this.ingredients = ingredients;
        this.preparationTime = preparationTime;
    }
    getProfit() {
        return this.price - this.cost;
    }
}
exports.Dish = Dish;
//# sourceMappingURL=dish.js.map