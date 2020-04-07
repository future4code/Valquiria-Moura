import {v4} from 'uuid'
import { User } from '../entities/User'
import { UserDataBase } from '../../data/UserDataBase'
import * as bcrypt from 'bcrypt'

interface LoginInput {
    name: string
    email: string
    password: string
}

export class LoginUseCase {
   async execute(input: LoginInput){ 
        const userDataBase = new UserDataBase()

        const user = userDataBase.getUserByEmail(input.email)
        if(!user) {
            throw new Error('Email incorreto')
        }
        
        const isPasswordCorrect = await bcrypt.compare(input.password, user.getPassword())
        if (!isPasswordCorrect) {
            throw new Error('Senha incorreta')
        }

        return true
    }
}