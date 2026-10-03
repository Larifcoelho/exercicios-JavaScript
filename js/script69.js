let numeros = 1
antecessores = 1

do {
    antecessores = numeros * antecessores
    alert("O fatorial de "+ numeros +" é de: " +antecessores)
    numeros++
}while(numeros <= 15)