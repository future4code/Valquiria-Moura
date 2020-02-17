"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const f4bank_1 = require("./f4bank");
class JSONFileManager {
    salvaContaEmJSON(conta) {
        fs.writeFileSync('contas.json', JSON.stringify(conta));
    }
    lerContaEmJSON() {
        const file = JSON.parse(fs.readFileSync('contas.json').toString());
        return new f4bank_1.UserAccount(file.name, file.cpf, file.age);
    }
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map