import knex from "knex";
import { User } from "../bussiness/entities/User";

export class UserDataBase {
  private connection: knex
    constructor() {
      this.connection = knex( {
        client: 'mysql',
        connection: {
          host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
          user: 'valquiria',
          password: 'iDaVPhUJE9hUGPuQkp4N',
          database: 'bouman-valquiria'
      }     
    })  
  }

  async createUser(user: User) {
    await this.connection.insert ( { 
      id: user.getId(),
      email: user.getEmail(),
      password: user.getPassword()
    }).into ('futurebook_users')
  }
}