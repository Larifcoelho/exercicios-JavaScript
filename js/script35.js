alert("Temporizador")
let minutosDigitados = parseInt (prompt("Digite os minutos que deseja: "))
let segundosDigitados = parseInt(prompt("Digite os segundos desejado: "))

for(let minutos = minutosDigitados; minutos> -1; minutos--){
    for(let segundos = segundosDigitados; segundos>-1; segundos--){
        console.log(minutos + " : " + segundos)
    }
    segundosDigitados = 59
}