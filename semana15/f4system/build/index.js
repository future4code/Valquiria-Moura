"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webMission_1 = require("./webMission");
const mobileMission_1 = require("./mobileMission");
const student_1 = require("./student");
const teacher_1 = require("./teacher");
const turmaWeb1 = new webMission_1.WebMission("Missão Bananinha", "01/01/2010", "30/06/2020");
turmaWeb1.createWebMission();
const turmaMobile1 = new mobileMission_1.MobileMission("Turma 1", "02/02/2020", "30/06/2030");
turmaMobile1.createMobileMission();
const student1 = new student_1.Student("Mateus", "ma@teus.com", "20/07/1988");
student1.createStudent();
const teacher1 = new teacher_1.Teacher("Soter", "so@ter.com", "20/08/1996");
teacher1.createTeacher();
//# sourceMappingURL=index.js.map