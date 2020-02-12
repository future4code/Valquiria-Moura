"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const caminhoParaAPasta = "textos/";
const promiseLeitura = new Promise((resolve, reject) => {
    fs_1.readdir(caminhoParaAPasta, (err, arquivos) => {
        if (err) {
            reject(err);
        }
        console.log(arquivos);
        resolve(arquivos.toString());
    });
});
//# sourceMappingURL=listAllContent.js.map