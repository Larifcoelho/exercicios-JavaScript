let antecessor = 1
let numero = 1
let contador = 1

while(contador<=15){
    
    alert (antecessor + " + " + numero + " = "+resultado)
    let resultado = numero + antecessor
    antecessor=numero
    numero=resultado

    contador++
    
}
