alert("Temporizador")
let horasDigitadas = parseInt(prompt("Digite o horário desejado: "))
let minutosDigitados = parseInt (prompt("Digite os minutos que deseja: "))
let segundosDigitados = parseInt(prompt("Digite os segundos desejado: "))


for(let horas = horasDigitadas; horas>-1; horas--){
for(let minutos = minutosDigitados; minutos> -1; minutos--){
    for(let segundos = segundosDigitados; segundos>-1; segundos--){
        console.log(horas + " : " + minutos + " : " + segundos)
    }
    segundosDigitados = 59
}
minutoDigitados = 59
}