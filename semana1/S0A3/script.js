const ensinoMedio = prompt ("Concluiu o Ensino Médio? [s/n]")
const idade = Number(prompt ("Qual a sua idade?"))
const faculdade = prompt("Concluiu a faculdade? [s/n]")

if (ensinoMedio === "s" && idade >= 18 && faculdade === "n") {
  console.log ("Aprovado")
  }

else {
  console.log ("Reprovado")
}



