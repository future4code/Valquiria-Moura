const operacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
let resultado;
switch (operacao) {
    case "add":
        resultado = num1 + num2
        console.log("\033[34m Resposta:", resultado);
        break;
    case "sub":
        resultado = num1 - num2
        console.log("\033[0;35m Resposta:", resultado);
        break;
    case "mult":
        resultado = num1 * num2
        console.log("\033[0;32m Resposta:", resultado);
        break;
    case "div":
        resultado = num1 / num2    
        console.log("\033[0;36m Resposta:", resultado);
        break;
    default:
        console.error("Digite um operador válido!")
        break;
}

