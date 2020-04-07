import express, { Request, Response } from "express";
import {SignUpCase} from "../bussiness/usecase/SignUpUseCase"

export const SignUpEndpoint = async (request: Request, response: Response) => {
    const useCase = new SignUpCase()
    
    const input = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    }
    
    try{ 
        await useCase.execute(input)
    
        response.send({message: 'Usuário criado com sucesso!'})
    } catch(e) {
        response.status(500).send({message: e.message})
    }
}