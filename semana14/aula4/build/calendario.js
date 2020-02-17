"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const nomeArquivo = "getEvents.json";
try {
    const escrevendoArquivo = fs.writeFile(nomeArquivo);
    const escrevendoArquivoString = escrevendoArquivo.toString();
    const escrevendoArquivoObjeto = JSON.parse(escrevendoArquivoString);
    escrevendoArquivoObjeto.forEach((compromisso) => {
        console.log(compromisso.nome, '-', compromisso.descricao, '-', compromisso.data);
    });
    const conteudoArquivo = fs.readFile(nomeArquivo);
    const conteudoArquivoString = conteudoArquivo.toString();
    const conteudoArquivoObjeto = JSON.parse(conteudoArquivoString);
    conteudoArquivoObjeto.forEach((compromisso) => {
        console.log(compromisso.nome, '-', compromisso.descricao, '-', compromisso.data);
    });
}
catch (err) {
    console.error(err);
}
//# sourceMappingURL=calendario.js.map