//Pegar o exercicio no github e colocar aqui
//13. Peça um número inteiro e diga se ele é par ou ímpar . (Dica: se o número dividido por 2 tiver resto 0, é par)
//Dica: se o numero dividido por 2 tiver o resto 0 é par


//Entrada
//Sempre colocamos variaveis, dos tipo...
// const - algo fixo
//let - nao fixo
//var - erro
//pedir informação para o usuario usando prompt
//explicar dentro do prompt de que se trata a solicitação

const numero = Number(prompt('Digite um numero, vou validar se é par ou ímpar:'))

//Procesamento
//Normalmente vem um calcúlo aqui
//Pode também ser usado a variavel aqui
//Temos que fazer o calcúlo do exercicío no caso fazer uma divisão e pegar o resto

const resto = numero % 2

//saísa
//Mostrar o resultado com o codigo alert()
if (resto == 0) {
    alert("O número informado é Par")
    //Agora usamos else porque tudo que nn está em cima irá para o else no caso os resultados Ímpares
} else {
    alert("O número informado é Ímpar")
}
