"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const JSONFileManager_1 = require("./JSONFileManager");
class NormalPostCreator {
    constructor(nome, texto) {
        this.nome = nome;
        this.texto = texto;
    }
    create() {
        const fileManager = new JSONFileManager_1.FileManager("./posts.json");
        const data = moment().format("DD/MM/YYYY HHmm");
        let posts = fileManager.readFile();
        const newPost = { nome: this.nome, texto: this.texto, data };
        posts = [...posts, newPost];
        fileManager.writeFile(posts);
    }
}
exports.NormalPostCreator = NormalPostCreator;
//# sourceMappingURL=normalPostCreator.js.map