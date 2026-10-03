/*Elaborar um programa que efetue a apresentação do valor da conversão em dolar de um valor lido em 
real*/
let real = parseFloat(prompt("Digite o valor em reais para converte-lo em dolares: "))
let cotacao = parseFloat(prompt("Digite o valor do real atual: "))

let dolar = dolar * cotacao 

alert("O valor em dolares é de: R$"+ dolar)