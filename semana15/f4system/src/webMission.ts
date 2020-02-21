import { Mission } from "./mission";
import { FileManager } from "./JSONFileManager"

export class WebMission extends Mission {
  constructor(
    startDate: string,
    endDate: string,
        
    public patron: string,
  ) {
    super(startDate, endDate);
  }
  createWebMission(){
    const fileManager = new FileManager("./fileManager.json")
    let missions = fileManager.readFile()
    const newMission: any = new WebMission (this.patron, this.startDate, this.endDate)
    missions = [...missions, newMission]
    fileManager.writeFile(missions)
}
}