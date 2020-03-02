import * as fs from 'fs'
import { UserAccount } from './f4bank';

export class JSONFileManager {
    salvaContaEmJSON (conta: UserAccount) {
        fs.writeFileSync('contas.json', JSON.stringify(conta))
    }
    lerContaEmJSON(): UserAccount {
        const file = JSON.parse(fs.readFileSync('contas.json').toString())
        return new UserAccount(file.name, file.cpf, file.age)

    }
}



