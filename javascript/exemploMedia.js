//Entrada variaveis
//Media aritimetica de 3 notas, e menor que 3 horrivel
//Menos que 7 da pra melhorar, maior que 7 genio
const nota1 = prompt("Digite o 1ª numero")
const nota2 = prompt("Digite o 2ª numero")
const nota3 = Number(prompt("Digite o 3ª numero"))

//Processando
const soma = Number(nota1) + Number(nota2) + nota3
const media = soma / 3

//Menor do que 3
//Menor do que 7
//Maior do que 7
if (media < 3) {
    alert("Media é insuficiente: " + media + " - Horrivel")
} else if (media < 7) {
    alert("Media é insuficiente: " + media + " - Da pra melhorar")
} else {
    alert("Media é suficiente: " + media + " - Alberti Aisten")
}
