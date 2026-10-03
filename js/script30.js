let soma = 0
contadora = 1

while (contadora <= 10) {
    let nota = Number(prompt(`Digite o ${contadora}º valor:`))
    soma = soma + nota
    contadora++
}
let media = soma / 10
alert("O somatório é: " + soma)
alert("A média é de: " + media)
