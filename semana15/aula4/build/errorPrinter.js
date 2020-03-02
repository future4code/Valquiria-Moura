"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class ErrorPrinter {
    constructor(mensagem) {
        this.mensagem = mensagem;
    }
    errorMessage() {
        const data = moment();
        console.log("<", this.mensagem, "> ", "- <", data, ">");
    }
}
exports.ErrorPrinter = ErrorPrinter;
//# sourceMappingURL=errorPrinter.js.map