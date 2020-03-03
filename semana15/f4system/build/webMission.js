"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mission_1 = require("./mission");
const JSONFileManager_1 = require("./JSONFileManager");
class WebMission extends mission_1.Mission {
    constructor(startDate, endDate, patron) {
        super(startDate, endDate);
        this.patron = patron;
    }
    createWebMission() {
        const fileManager = new JSONFileManager_1.FileManager("./fileManager.json");
        let missions = fileManager.readFile();
        const newMission = new WebMission(this.patron, this.startDate, this.endDate);
        missions = [...missions, newMission];
        fileManager.writeFile(missions);
    }
}
exports.WebMission = WebMission;
//# sourceMappingURL=webMission.js.map