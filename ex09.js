let readline = require('readline-sync');

let numeros = [];

for (let i = 1; i <= 3; i++) {
    let numero = readline.questionInt(`Digite o ${i}º número inteiro: `);
    numeros.push(numero);
}

let maiorNumero = Math.max(...numeros);

console.log(`O maior número digitado é: ${maiorNumero}`);