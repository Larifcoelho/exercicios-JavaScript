let multiplicacao = document.getElementById("multiplicacao")

function multiplicacao2 (a,b){
    return a*b
}

let resultadoMultiplicacao= multiplicacao2(5,5)
multiplicacao.innerHTML="O resultado da multiplicação entre: 5 X 5 é igual a: " +resultadoMultiplicacao
multiplicacao.style.backgroundColor="lightgreen"
