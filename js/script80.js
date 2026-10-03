let anterior = 1
let atual = 1

for (let numero = 1; numero <= 15; numero++) {

    alert(atual)

    let proximo = anterior + atual

    anterior = atual
    atual = proximo
}