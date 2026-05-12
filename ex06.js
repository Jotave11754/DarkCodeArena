let readline = require ("readline-sync")

let numero = readline.questionInt("Digite um numero inteiro: ")

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}