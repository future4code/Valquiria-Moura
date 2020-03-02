"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
class Chef extends employee_1.Employee {
    constructor() {
        super(...arguments);
        this.sayJob = () => 'chef';
    }
}
exports.Chef = Chef;
//# sourceMappingURL=chef.js.map