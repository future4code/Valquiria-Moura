import { Mission } from "./mission";
import { FileManager } from "./JSONFileManager"

export class MobileMission extends Mission {
  constructor(
    startDate: string,
    endDate: string,
    
    public missionNumber: string,
    ) {
    super(startDate, endDate);
  }
  createMobileMission(){
    const fileManager = new FileManager("./fileManager.json")
    let missions = fileManager.readFile()
    const newMission: any = new MobileMission (this.missionNumber, this.startDate, this.endDate)
    missions = [...missions, newMission]
    fileManager.writeFile(missions)
}
}