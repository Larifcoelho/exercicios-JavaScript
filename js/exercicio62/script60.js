let subtracao = document.getElementById("subtracao")

function subtracao2 (a,b){
    return a-b
}

let resultadoSubtracao = subtracao2(20,10)
subtracao.innerHTML= "O resultado da subtração entre: 20 - 10 é igual a: " +  resultadoSubtracao
subtracao.style.backgroundColor="red"