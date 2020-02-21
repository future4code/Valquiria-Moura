"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const JSONFileManager_1 = require("./JSONFileManager");
class Teacher extends user_1.User {
    constructor(name, email, birthDate) {
        super(name, email, birthDate);
    }
    createTeacher() {
        const fileManager = new JSONFileManager_1.FileManager("./fileManager.json");
        let teachers = fileManager.readFile();
        const newTeacher = { name: this.name, email: this.email, birthDate: this.birthDate };
        teachers = [...teachers, newTeacher];
        fileManager.writeFile(teachers);
    }
}
exports.Teacher = Teacher;
//# sourceMappingURL=teacher.js.map