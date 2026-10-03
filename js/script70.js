
let media
let total = 0
let contador = 0
let numero = 0
do {
    numero = parseFloat(prompt("Digite valores numéricos e descubra o total e a média deles: "))
    if (numero > 0) {
        total = total + numero
        contador++
        media = total / contador
    }

}
while (numero > 0)
alert("O total somátorio dos números é de: " + total)
alert("A quantidade de números digitados é de: " + contador)
alert("A média dos números é de: " + media)

