export class Dish {
    public price: number
    public cost: number
    public ingredients: string []
    public preparationTime: number

    constructor(price: number, cost: number, ingredients: string [], preparationTime: number) {
        this.price = price
        this.cost = cost
        this.ingredients = ingredients
        this.preparationTime = preparationTime
    }

    public getProfit() {
        return this.price - this.cost
    }
}
