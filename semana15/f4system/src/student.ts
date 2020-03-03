import { User } from "./user";
import { FileManager } from "./JSONFileManager"

export class Student extends User {
    constructor (
        name: string,
        email: string,
        birthDate: string,
    ) {
        super(name, email, birthDate);
    }
    createStudent(){
        const fileManager = new FileManager("./fileManager.json")
        let students = fileManager.readFile()
        const newStudent: any = {name: this.name, email: this.email, birthDate: this.birthDate}
        students = [...students, newStudent]
        fileManager.writeFile(students)
    }
}

