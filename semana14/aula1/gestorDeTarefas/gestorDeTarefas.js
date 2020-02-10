const fs = require('fs');
const fileName = "tarefas.txt";
const conteudoInicial = "Comprar pao\n Comprar sabonete";
const adicionandoConteudo = "\nComprar leite";

try {
    fs.writeFileSync(fileName, conteudoInicial);
    console.log("\033[1;33m Arquivo criado com sucesso!")
} catch(err) {
    console.error(err)
}

try {
    fs.appendFileSync(fileName, adicionandoConteudo);
    console.log ("\033[1;31m Conteúdo inserido com sucesso!")
} catch(err) {
    console.error(err)
}
