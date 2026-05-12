
let Pares = 0

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        Pares += i
    }
}

console.log(`A soma de todos os números pares entre 1 e 100 é: ${Pares}`)