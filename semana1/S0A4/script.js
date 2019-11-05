/**
 * EXERCÍCIO 1
 * 
 * Primeiro a variável "sum" foi criada à partir de um let e recebeu o valor zero.
 * Criou-se um "for" para um loop e dentro dele um let criou uma variável i que será utilizada como um contador.
 * "i" inicialmente recebe o valor zero.
 * Enquanto i for menor que 11, a variável "sum" será a soma de "sum" com "i".
 * Cada vez que essa soma for realizada, o sistema volta para o "for" e acrescenta 1 ao "i", por conta do trecho "i++".
 * Quando "i" for 11, o sistema sai do "for" e apresenta no console o valor de "sum".
 * 
 */

/**
 * EXERCÍCIO 2
 * 
 * a. O ".push" adiciona um elemento ao final do array, neste caso, o que estiver dentro na variável "item".
 * 
 * b. [10, 15, 20, 25, 30]
 * 
 * c. Caso a variável "numero" tivesse o valor 3, o console imprimiria [12, 15, 18, 27, 30], caso a variável tivesse o valor 4, imprimiria [12, 20]
 * 
 */

/**
 * EXERCÍCIO 4
 */

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let maior = arrayOriginal[0]
let menor = arrayOriginal[0]

for (let num of arrayOriginal) {
  if (num > maior) {
    maior = num
  }
  else if (num < menor) {
    menor = num
  }
}
console.log ("O maior número é " + maior + " e o menor é " + menor)

let porDez = arrayOriginal [0]
let novoArray = []
for (let num of arrayOriginal) {
  porDez = num/10
  novoArray.push (porDez)
}
console.log (novoArray)

let impares = arrayOriginal[0] 

let newArray = []
for (let num of arrayOriginal) {
  if (num%2 === 1) {
  newArray.push (num)
  }
}
console.log (newArray)

let array = []

for (let num of arrayOriginal) {
  let posicao = arrayOriginal.indexOf (num) //sei que não foi passado o que é o indexOf, mas eu pesquisei no Google e foi o único jeito que consegui fazer, me desculpe...=/
  array.push ("O elemento do index " + posicao + " é " + num)
}
console.log (array)