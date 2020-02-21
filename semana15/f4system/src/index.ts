import { WebMission } from "./webMission"
import { MobileMission } from "./mobileMission"
import { Student } from "./student"
import { Teacher } from "./teacher"

const turmaWeb1 = new WebMission ("Missão Bananinha", "01/01/2010", "30/06/2020")
turmaWeb1.createWebMission()

const turmaMobile1 = new MobileMission ("Turma 1", "02/02/2020", "30/06/2030")
turmaMobile1.createMobileMission()

const student1 = new Student ("Mateus", "ma@teus.com", "20/07/1988")
student1.createStudent()

const teacher1 = new Teacher ("Soter", "so@ter.com", "20/08/1996")
teacher1.createTeacher()