// 1. método readdir do node pra pegar o 
// nome de todos os arquivos de uma determinada pasta
// 2. fs.readFile e Promise.all()
// 3. console.log

// import { readFile } from 'fs';
// const fileName:string = "textos/"
// const handleFileRead = (err: Error, data: Buffer) => {
//     if (err){
//         console.error(err);
//         return;
//     }
//     const fileContent:string = data.toString();
//     console.log("Arquivo lido com sucesso", fileContent);
// };
// console.log("1");
// readFile(fileName, handleFileRead);
// console.log("2");

import { readdir } from "fs";

const caminhoParaAPasta = "textos/";

const promiseLeitura = new Promise ((resolve, reject) => {
    readdir(caminhoParaAPasta, (err, arquivos) => {
        if(err){
            reject(err)
        }
        console.log(arquivos)
        resolve(arquivos.toString())
    })
});

// const init = async () => {
//     try{
//         const conteudoDoArquivo = await promiseLeitura;
//         console.log(conteudoDoArquivo)
//     } catch(error){
//         console.error("Promise falhou", error)
//     }
// }

// init();