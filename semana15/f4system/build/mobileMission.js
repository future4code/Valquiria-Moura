"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mission_1 = require("./mission");
const JSONFileManager_1 = require("./JSONFileManager");
class MobileMission extends mission_1.Mission {
    constructor(startDate, endDate, missionNumber) {
        super(startDate, endDate);
        this.missionNumber = missionNumber;
    }
    createMobileMission() {
        const fileManager = new JSONFileManager_1.FileManager("./fileManager.json");
        let missions = fileManager.readFile();
        const newMission = new MobileMission(this.missionNumber, this.startDate, this.endDate);
        missions = [...missions, newMission];
        fileManager.writeFile(missions);
    }
}
exports.MobileMission = MobileMission;
//# sourceMappingURL=mobileMission.js.map