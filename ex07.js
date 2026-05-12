let readline = require ("readline-sync")

let soma = 0

for (let i = 1; i <= 5; i++) {
    let numero = readline.questionInt(`Digite o ${i}º número inteiro: `)
    soma += numero
}

console.log(`A soma de todos os números digitados é: ${soma}`)