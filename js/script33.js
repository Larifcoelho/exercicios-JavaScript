/*Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo 
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo 
usuário.*/

let valor = parseInt(prompt("Digite um número: "))

let maior = valor
let menor = valor

while (valor >= 0) {
     
    valor = parseInt(prompt("Digite outro número: "))

    if (valor >= 0 && valor > maior) {
        maior = valor
    } if (valor >= 0 && valor < menor) {
        menor = valor
    }

}
alert("O maior número é: " + maior)
alert("O menor número é: " + menor)
