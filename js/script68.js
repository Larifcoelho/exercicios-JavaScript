let contador = 1
let acumulador = 0
let tabuleiro = 1

do{
    alert(contador + " grão(s) de trigo.")

    acumulador = acumulador + contador
    contador = contador * 2
    tabuleiro++
    
}while(acumulador<=64)
    alert("Total de grãos " + acumulador)