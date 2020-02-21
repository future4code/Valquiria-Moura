"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const JSONFileManager_1 = require("./JSONFileManager");
class Student extends user_1.User {
    constructor(name, email, birthDate) {
        super(name, email, birthDate);
    }
    createStudent() {
        const fileManager = new JSONFileManager_1.FileManager("./fileManager.json");
        let students = fileManager.readFile();
        const newStudent = { name: this.name, email: this.email, birthDate: this.birthDate };
        students = [...students, newStudent];
        fileManager.writeFile(students);
    }
}
exports.Student = Student;
//# sourceMappingURL=student.js.map