import {v4} from 'uuid'
import { User } from '../../entities/User'
import { UserDataBase } from '../../../data/UserDataBase'
import * as bcrypt from 'bcrypt'

interface SignUpInput {
    name: string
    email: string
    password: string
}

export class SignUpCase {

   async execute(input: SignUpInput){
        
    try {
        const userId = v4()

        const hashPassword = await bcrypt.hash(input.password, 10)

        const newUser = new User(
            userId, 
            input.name, 
            input.email, 
            hashPassword
            )
        
        const userDataBase = new UserDataBase()

        await userDataBase.createUser(newUser)
    } catch (e) {
        console.log(e)
        throw new Error ('Houve um problema ao criar o usuário!')
    }
    
    }
}