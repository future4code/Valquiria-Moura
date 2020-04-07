import knex from 'knex';
import express, { Request, Response } from "express";
import { AddressInfo } from 'net'

const connection = knex({
  client: 'mysql',
  connection: {
    host : 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user : 'valquiria',
    password : 'iDaVPhUJE9hUGPuQkp4N',
    database : 'bouman-valquiria'
  }
});

const app = express();
app.use(express.json()); // Linha mágica (middleware)
app.listen(3000); //Porta usada para fazer a comunicação

//Guarda todos os endpoints
app.get('/', (req: Request, res: Response) => {
  const resposta = {
    endpoints: {
      '/': 'retorna lista com todos os endpoints',
      '/usuario': 'cadastra usuario',
      '/tarefa': 'cria tarefa'
    }
  };
  res.send(resposta);
});

//1- Criar Usuário
app.post('/usuario', (req: Request, res: Response) => {
  const criaUsuario = connection.insert(req.body).into('usuariosToDoList');
  criaUsuario.then((result) => {
    res.send(`O usuário ${req.body.nickname} foi criado com sucesso!!!`);
  }).catch(err)=> {
    res.send(err)
  };
});



// const query = connection.raw("ESCREVA SQL PURO AQUI!!!");

// query.then(resultado => {
//   console.log(resultado);
// });

