let numero = parseInt(prompt("Digite um número para a divisão: "))
let divisor = parseInt(prompt("Digite um segundo número para a divisor: "))
let resultado = 0
do{
    numero = numero - divisor
    resultado++
}while(numero>=divisor)
    alert("O resultado é: " + resultado)