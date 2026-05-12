let readline = require ("readline-sync")


let valorCompra = readline.questionFloat("Digite o valor da compra: R$ ")

let desconto = 0

if (valorCompra > 500) {
    desconto = 20
} else if (valorCompra >= 200 && valorCompra <= 500) {
    desconto = 10
}

let valorDesconto = (valorCompra * desconto) / 100
let valorFinal = valorCompra - valorDesconto

console.log(`Valor original: R$ ${valorCompra.toFixed(2)}`)
console.log(`Percentual de desconto: ${desconto}%`)
console.log(`Valor final da compra: R$ ${valorFinal.toFixed(2)}`)

