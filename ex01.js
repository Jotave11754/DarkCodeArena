let readline = require ("readline-sync")

let numero = readline.questionInt("Digite um numero inteiro: ")

if (numero > 0) {
    console.log("Número positivo")
} else if (numero < 0) {
    console.log("Número negativo")
} else {
    console.log("Zero")
}