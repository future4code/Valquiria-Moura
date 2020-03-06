"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const express_1 = __importDefault(require("express"));
const connection = knex_1.default({
    client: 'mysql',
    connection: {
        host: ' ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
        user: 'valquiria',
        password: 'iDaVPhUJE9hUGPuQkp4N',
        database: 'bouman-valquiria'
    }
});
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
//Guarda todos os endpoints
app.get('/', (req, res) => {
    const resposta = {
        endpoints: {
            '/': 'retorna lista com todos os endpoints',
            '/usuario': 'cadastra usuario',
            '/tarefa': 'cria tarefa'
        }
    };
    res.send(resposta);
});
app.listen(3000); //Porta usada para fazer a comunicação
// const query = connection.raw("ESCREVA SQL PURO AQUI!!!");
// query.then(resultado => {
//   console.log(resultado);
// });
