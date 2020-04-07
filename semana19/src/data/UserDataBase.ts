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
    await this.connection.raw (  
      `INSERT INTO futurebook_users VALUES
      ("${user.getId()}", "${user.getName()}", "${user.getEmail()}", "${user.getPassword()}")`
    )
}

  async getUserByEmail(email:string): Promise<User | undefined> {
    const user = await this.connection.select ('*').from('users').where({email})
    if(!user[0]) {
      return undefined
    }
    return new User(user[0].id, user[0].name, user[0].email, user[0].password)
    
  }
}