/**
 *
 * EXERCÍCIOS DE INTERPRETAÇÃO
 *
 * EXERCÍCIO 1
 *
 * a. false
 * A condição "e" só é true se tudo for true.
 *
 * b. false
 * false ou true -> true
 * true e !true -> true e false
 * true e true -> false
 *
 * c. true
 * !false e (true ou true)
 * true e true -> true
 *
 * d. false
 * (true e (true ou false)) e !(!false)
 * (true e true) e !true
 * true e false -> false
 *
 * e. boolean
 * Durante o exercício estamos lidando com
 * condições, por isso são booleanos.
 */

/**
 * EXERCÍCIO 2
 * I. undefined
 * Porque não agregamos nenhum valor
 * à variável "array".
 *
 * II. null
 * Porque agregamos o null à variável.
 *
 * III. null ou 11
 * No console apareceu "null", mas eu sinceramente
 * não entendi o porque.
 * Como no código tem "array.length" ele deveria
 * contar os itens, pra mim deveria aparecer 11.
 * Afinal ele incrementou a variável com 11 itens.
 *
 * IV. 3 e 4
 * Primeiro criou-se uma variável "i" e agregou-se o
 * valor 0 para ela.
 * Depois chamou pelo console o array[0] e o array[0+1].
 * A posicão 0 e 1 do array são 3 e 4.
 *
 * V. 19 e 9
 * Substituiu-se o valor do array 1 que era o número 4
 * por 19.
 * Depois foi criada a variável "valor" que conteria o
 * array[0+6].
 * Então pediu-se pra apresentar o número 19, descoberto
 * no início e a posição 6 da lista que é o número 9.
 *
 * VI. 3
 * Primeiro i+ -> valor de i que no caso em questão é 0,
 * mais 1. Portanto a posição 1 passou a ser o número 1.
 * Depois foi dito que array [i] seria igual à array [1-1].
 * Então array [i] = array [0].
 * Logo o console array [i] é a posição 0 que tem o número 3.
 *
 * VII. 1 ou 2
 * Primeiro diz-se que a variável "i" é igual ao último item
 * da lista, que é 11 menos 1, igual à 10.
 * array [10] = array[10-3]
 * array [10] = array [7]
 * Na variável "resultadoC" agregou-se o valor de
 * array [7]%array[1]
 * Ou seja, resto da divisão de 10 por 4.
 * Eu acho que é 2, mas o console diz que é 1.
 * Não consegui chegar ao 1 de jeito nenhum.
 *
 * a. O que é `array` e como se declara em `JS`?
 * Array é usado para guardar e acessar mais de uma informação
 * ao mesmo tempo.
 * Declaramos uma variável e colocarmos os valores dentro de
 * colchetes [] entre vírgulas, conforme exemplo abaixo:
 * let nomedoarray = [1,5,33,45]
 *
 * b. Qual o index inicial de um `array`?
 * Eles sempre começam do index [0]
 *
 * c. Como se determinar o tamanho do `array`?
 * Usando o .lenght conforme exemplo abaixo:
 * nomedoarray.lenght
 *
 * d. Indique todas as mensagens impressas no console.
 * Já indiquei acima.
 */

/**
 *
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 *
 * EXERCÍCIO 1
 */

let kelvin;
let fahrenheit;

kelvin = ((77 - 32) * 5) / 9 + 273.15;

console.log("A. 77°F corresponde a " + kelvin + "°K");

fahrenheit = (80 * 9) / 5 + 32;

console.log("B. 80°C corresponde à " + fahrenheit + "°F");

fahrenheit = (30 * 9) / 5 + 32;
kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;

console.log(
  "C. 30°C corresponde à " +
    fahrenheit +
    "°F e também corresponde à " +
    kelvin +
    "°K"
);

/* let celsius = prompt ("Digite a temperatura em Celsius")

fahrenheit = (celsius * 9) / 5 + 32
kelvin = ((fahrenheit -32) *5) / 9 + 273.15

console.log(
  "D. " + celsius + "°C corresponde à " +
  fahrenheit + 
  "°F e também corresponde à " +
  kelvin +
  "°K"

)
*/
 /**
 * EXERCÍCIO 2
 * 
 * Faça um programa que faça 5 perguntas para o usuário 
 * (pode ser criativo nesta parte). Imprima-as com as 
 * respostas no console da seguinte forma:
    	1. Qual o seu endereço?
    	Resposta: Rua ABC, 123
    
    	2. Qual a sua cor favorita?
    	Resposta: Azul

 */

let nome = prompt ("Qual é o seu nome?")
console.log ("Nome: " + nome)

let idade = prompt ("Qual é a sua idade?")
console.log ("Idade: " + idade)

let altura = prompt ("Qual é a sua altura?")
console.log ("Altura: " + altura)

let cor = prompt ("Qual a sua cor favorita?")
console.log ("Cor: " + cor)

let vemsempre = prompt ("Você vem sempre aqui?")
console.log ("Vem sempre aqui? " + vemsempre)

 /**
 * EXERCÍCIO 3
 * 
 * Quilowatt-hora é uma unidade de energia; e é muito utilizada 
 * para se determinar o consumo de energia elétrica em residências. 
 * Sabe-se que o quilowatt-hora de energia custa um quinto do salário 
 * mínimo. Faça um programa que receba o valor do salário mínimo e a 
 * quantidade de quilowatts consumida por uma residência.
 * 
 * a. Calcule e mostre o valor de cada quilowatt-hora, considerando 
 * o atual valor do salário mínimo;

b. Calcule e mostre o valor a ser pago por uma residência que consuma 
280 quilowatt-hora;

c. Altere o programa para receber mais um valor: a porcentagem de desconto. 
Calcule e mostre o valor a ser pago pela mesma residência acima considerando 
15% de desconto.
 * 
 */