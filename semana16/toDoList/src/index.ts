import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
  client: 'mysql',
  connection: {
    host : ' ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user : 'valquiria',
    password : 'iDaVPhUJE9hUGPuQkp4N',
    database : 'bouman-valquiria'
  }
});

