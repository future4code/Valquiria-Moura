import * as moment from "moment"

export class ErrorPrinter {
    constructor (
        public mensagem: string,
    ) {}
    
    errorMessage () {
        const data = moment()
        console.log ("<",this.mensagem, "> ", "- <", data, ">")
    }
}