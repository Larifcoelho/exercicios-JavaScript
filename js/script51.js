/*Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em 
dólar*/
let dolar = parseFloat(prompt("Digite o valor em dolar para converte-lo em reais: "))
let cotacao = parseFloat(prompt("Digite o valor do dolar atual: "))

let real = dolar * cotacao 

alert("O valor em reais é de: R$"+ real)