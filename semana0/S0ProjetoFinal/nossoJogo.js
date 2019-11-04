import comprarCarta from './naoMexer.js'

console.log ("Bem vindo ao jogo de Blackjack!")

const carta1 = comprarCarta(); 
const carta2 = comprarCarta();
const carta3 = comprarCarta();
const carta4 = comprarCarta();

if (confirm("Quer iniciar uma nova rodada? [Ok para sim / Cancelar para não]")) {
  let usuario = carta1.valor+carta2.valor
  let maquina = carta3.valor+carta4.valor
  console.log ("Usuário - cartas: " + carta1.texto + " " + carta2.texto + " - pontuação " + usuario) 
  console.log ("Computador - cartas: " + carta4.texto + " " + carta4.texto + " - pontuação " + maquina) 
    if (usuario>maquina) {
       console.log ("O usuário ganhou!")
        }
    else if (usuario<maquina) {
        console.log ("O computador ganhou!")
        }
    else {
      console.log ("Empate!")
    }
    } 
else {
 	console.log ("O jogo acabou")
    }