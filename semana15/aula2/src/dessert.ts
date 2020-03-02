import { Dish } from './dish'

export class Dessert extends Dish {
    public numberOfPieces: number

    constructor (price: number, cost: number, ingredients: string [], preparationTime: number, numberOfPieces: number) {
        super(price, cost, ingredients, preparationTime)
        this.numberOfPieces = numberOfPieces
    }

    public getPiecePrice() {
        return this.price/this.numberOfPieces
    }
}