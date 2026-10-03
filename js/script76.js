let acumulador = 0
for(let numero = 1; numero<=500; numero++){
    if(numero % 2 === 0){
        alert(numero)
        acumulador = numero + acumulador
    }
}
alert("A adição dos números pares é igual a: " + acumulador)
