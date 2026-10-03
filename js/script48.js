/*Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na 
utilização do conceito da propriedade distributiva.*/
let a = parseInt(prompt("Digite um número inteiro: "))
let b = parseInt(prompt("Digite o segundo número inteiro: "))
let c = parseInt(prompt("Digite o terceiro número inteiro: "))
let d = parseInt(prompt("Digite o quarto número inteiro: "))

let ab = a+b
let abMultiplicacao = a*b

let ac = a+c
let acMultiplicacao = a*b

let ad = a+d
let adMultiplicacao = a*d

let bc = b+c
let bcMultiplicacao = b*c

let bd = b+d
let bdMultiplicacao = b*d

let cd = c+d
let cdMultiplicacao = c*d

alert ("A soma entre o primeiro e o segundo número é de: " + ab)
alert ("A soma entre o primeiro e o terceiro número é de: " + ac)
alert ("A soma entre o primeiro e o quarto número é de: " + ad)
alert ("A soma entre o segundo e o terceiro número é de: " + bc)
alert ("A soma entre o segundo e o quarto número é de: " + bd)
alert ("A soma entre o terceiro e o quarto número é de: " + cd)

alert ("A multiplicação entre o primeiro e o segundo número é de: " + abMultiplicacao)
alert ("A multiplicação entre o primeiro e o terceiro número é de: " + acMultiplicacao)
alert ("A multiplicação entre o primeiro e o quarto número é de: " + adMultiplicacao)
alert ("A multiplicação entre o segundo e o terceiro número é de: " + bcMultiplicacao)
alert ("A multiplicação entre o segundo e o quarto número é de: " + bdMultiplicacao)
alert ("A multiplicação entre o terceiro e o quarto número é de: " + cdMultiplicacao)




