let numero = parseInt(prompt("Digite um número e veja a tabuada dele: "))
let base = 1

do{
    let resultado = base * numero
    alert(base + " X " + numero + " = "+ resultado)
    base++
}while(base<=10)
