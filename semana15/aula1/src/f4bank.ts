export class UserAccount {
    balance: number
    cpf: string
    name: string
    age: number

    constructor(name: string, cpf: string, age: number) {
        this.balance = 0
        this.name = name
        this.cpf = cpf
        this.age = age
    }

    

    // getBalance(): void { //number
    //     console.log (`${this.name}`, `${this.cpf}`, `${this.age}`,"Passou no getBalance")
    // }   
    // addBalance(): void {
    //     console.log ("Passou no addBalance")
    // }
}



// cliente1.getBalance()
// cliente1.addBalance()

