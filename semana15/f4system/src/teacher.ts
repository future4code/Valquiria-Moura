import { User } from "./user";
import { FileManager } from "./JSONFileManager"

export class Teacher extends User {
    constructor (
        name: string,
        email: string,
        birthDate: string,
        //public specialty: string,
    ) {
        super(name, email, birthDate)
    }

    createTeacher(){
        const fileManager = new FileManager("./fileManager.json")
        let teachers = fileManager.readFile()
        const newTeacher: any = {name: this.name, email: this.email, birthDate: this.birthDate}
        teachers = [...teachers, newTeacher]
        fileManager.writeFile(teachers)
    }
}