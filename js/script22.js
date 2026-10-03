let numeroFinal = parseInt(prompt("Digite um número para limite final da tabuada: "))
let numeroBase = 1

while(numeroBase <= numeroFinal){
  let calculo = numeroBase * numeroFinal
  alert(numeroFinal + " X " + numeroBase + " = " + calculo)
  numeroBase++
  
}


