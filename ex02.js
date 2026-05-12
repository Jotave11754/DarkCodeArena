let readline = require ("readline-sync")

// Crie um programa que leia a nota de um aluno (de 0 a 10).
// O programa deverá verificar:
// Se a nota for maior ou igual a 7 → mostrar "Aluno aprovado"
// .
// Se a nota estiver entre 5 e 6.9 → mostrar "Aluno em recuperação"
// .

// Se a nota for menor que 5 → mostrar "Aluno reprovado"

let nota = readline.questionFloat("Digite a nota do aluno (0 a 10): ")

if (nota >= 7) {
    console.log("Aluno aprovado")
}
else if (nota >= 5 && nota < 7) {
    console.log("Aluno em recuperação")
}
else if (nota < 5) {
    console.log("Aluno reprovado")
}
else {
    console.log("Nota inválida. Digite um valor entre 0 e 10.")
}