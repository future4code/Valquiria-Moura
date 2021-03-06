import knex from "knex";
import { User } from "../business/entities/user";

export class UserDB {
  private connection = knex({
    client: "mysql",
    connection: {
      host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
      port: 3306,
      user: "valquiria",
      password: "iDaVPhUJE9hUGPuQkp4N",
      database: "bouman-valquiria"
    }
  });

  private userTableName = "users";

  private mapDateToDbDate(input: Date): string {
    const year = input.getFullYear();
    const month = input.getMonth() + 1;
    const date = input.getDate();
    return `${year + "-" + month + "-" + date}`;
  }

  private mapDbDateToDate(input: string): Date {
    return new Date(input);
  }

  private mapDbUserToUser(input?: any): User | undefined {
    return (
      input &&
      new User(
        input.id,
        input.name,
        input.email,
        this.mapDbDateToDate(input.date)
      )
    );
  }

  public async createUser(user: User): Promise<void> {
    await this.connection.raw(`
INSERT INTO ${this.userTableName} (id, name, email, birthDate) 
VALUES(
	'${user.getId()}',
	'${user.getName()}',
	'${user.getEmail()}',
  STR_TO_DATE('${this.mapDateToDbDate(user.getBirthDate())}', '%Y-%m-%d')
);
    `);
  }

  public async getAllUsers(): Promise<User[]> {
    const result = await this.connection.raw(
      `SELECT * FROM ${this.userTableName}`
    );

    return result[0].map((res: any) => this.mapDbUserToUser(res)!);
  }

  public async updateUser(user: User): Promise<void> {
    await this.connection.raw(`
    UPDATE ${this.userTableName}
    SET 
      name='${user.getName()}',
      email='${user.getEmail()}',
      birthDate=STR_TO_DATE('${this.mapDateToDbDate(
        user.getBirthDate()
      )}', '%Y-%m-%d')
    WHERE id='${user.getId()}';
    `);
  }
}
