
let base = parseInt(prompt("Digite uma base de uma potência: "))
let expoente = parseInt(prompt("Digite um expoente: "))
let potencia = 1
let contador = 1

while(contador <= expoente){
        potencia = potencia * base
    contador++
}
alert(base + " elevado a " + expoente + "é igual a: " + potencia)