import * as moment from 'moment';

const fs = require('fs');
const nomeArquivo = "getEvents.json"

type compromisso  = {
    nome: string,
    descricao: string,
    data: string = "DD/MM/YYYY HH:mm",
};

try {
    const escrevendoArquivo = fs.writeFile(nomeArquivo);
    const escrevendoArquivoString = escrevendoArquivo.toString();
    const escrevendoArquivoObjeto = JSON.parse(escrevendoArquivoString);

    escrevendoArquivoObjeto.forEach((compromisso: string[]) => {
        console.log(compromisso.nome, '-', compromisso.descricao, '-', compromisso.data)
    })

    const conteudoArquivo = fs.readFile(nomeArquivo);
    const conteudoArquivoString = conteudoArquivo.toString();
    const conteudoArquivoObjeto = JSON.parse(conteudoArquivoString);

    conteudoArquivoObjeto.forEach((compromisso: string[]) => {
        console.log(compromisso.nome, '-', compromisso.descricao, '-', compromisso.data)
    })

} catch (err) {
    console.error(err);
}