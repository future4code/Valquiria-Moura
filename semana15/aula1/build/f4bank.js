"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAccount {
    constructor(name, cpf, age) {
        this.balance = 0;
        this.name = name;
        this.cpf = cpf;
        this.age = age;
    }
}
exports.UserAccount = UserAccount;
new UserAccount('André', '12345678910', 39);
new UserAccount('Isabel', '98765432110', 3);
//# sourceMappingURL=f4bank.js.map