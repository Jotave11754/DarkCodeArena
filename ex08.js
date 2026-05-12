let readline = require ("readline-sync")

let alunos = readline.questionInt("Quantos alunos existe na turma? ")

let notas = []

for (let i = 0; i < alunos; i++) {
    let nota = readline.questionFloat(`Digite a nota do aluno ${i + 1}: `)
    notas.push(nota)
}

let soma = notas.reduce((acc, nota) => acc + nota, 0)
let media = soma / alunos

console.log(`A média final da turma é: ${media.toFixed(2)}`)

let acimaMedia = notas.filter(nota => nota > media).length
let abaixoMedia = notas.filter(nota => nota < media).length

console.log(`Número de alunos acima da média: ${acimaMedia}`)
console.log(`Número de alunos abaixo da média: ${abaixoMedia}`)
