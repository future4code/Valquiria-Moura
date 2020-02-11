//Faça uma função que receba um array de números 
//e retorne um objeto que tenha as seguintes informações: 
//a quantidade de números que há no array, a quantidade 
//de números ímpares no array e a soma de todos os 
//elementos do array

const array: number[]= [1,2,3,4,5]

type infos = {
    qtde: number,
    impares: number,
    soma: number,
};

function calculandoArray (array: number[]): infos {
    for (let i=0; i < array.length; i++){
        let impar = 0;
        array[i] % 2 === 1 {
            impar = impar++
        };
        let sum = 0;
        sum = array[i] + sum 
    };

    const resultado = {
        qtde: array.length,
        impares: impar, 
        soma: sum,
    }

    return resultado
}

const resposta: infos = calculandoArray(array)
console.log(resposta)