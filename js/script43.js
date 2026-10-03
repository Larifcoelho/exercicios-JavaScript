let tempo = parseFloat (prompt("Digite o tempo gasto durante a corrida: "))
let velocidade = parseInt(prompt("Digite a velocidade percorrida: "))
let distancia= tempo * velocidade
let litros = distancia/12
alert("A velocidade média é de: " + velocidade + "Km/h. ") 
alert(". O tempo é de: " + tempo + ". ")
alert("A distancia é de: " + distancia + ". ")
alert("E o total de litros é de: " + litros + ". ")