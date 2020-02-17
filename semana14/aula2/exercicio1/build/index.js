const array = [1, 2, 3, 4, 5];
function calculandoArray(array) {
    for (let i = 0; i < array.length; i++) {
        let impar = 0;
        array[i] % 2 === 1;
        {
            impar = impar++;
        }
        ;
        let sum = 0;
        sum = array[i] + sum;
    }
    ;
    const resultado = {
        qtde: array.length,
        impares: impar,
        soma: sum,
    };
    return resultado;
}
const resposta = calculandoArray(array);
console.log(resposta);
//# sourceMappingURL=index.js.map