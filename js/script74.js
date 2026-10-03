let numero = parseInt(prompt("Digite um número e descubra a tabuada: "))
let resultado 
for(let base = 1; base <= 10; base++){
    resultado=numero*base
    alert(base +" X "+ numero +" = " + resultado)
}