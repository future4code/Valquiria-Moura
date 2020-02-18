"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class Dessert extends dish_1.Dish {
    constructor(price, cost, ingredients, preparationTime, numberOfPieces) {
        super(price, cost, ingredients, preparationTime);
        this.numberOfPieces = numberOfPieces;
    }
    getPiecePrice() {
        return this.price / this.numberOfPieces;
    }
}
exports.Dessert = Dessert;
//# sourceMappingURL=dessert.js.map