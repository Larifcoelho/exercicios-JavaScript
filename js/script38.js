//Efetuar o cálculo e a apresentação do valor de uma prestação em atraso
alert("Prestação")
const valor = parseFloat(prompt("Digite o valor da prestação: "))
const taxa = parseFloat(prompt("Digite a taxa de juros (%): "))
const tempo = parseFloat(prompt("Digite o tempo em atraso: "))
let prestacao = valor + (valor * taxa / 100) * tempo

alert("O valor da prestação é de: " + prestacao.toFixed(2))