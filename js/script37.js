alert("Temporizador")
let diasDigitados = parseInt(prompt("Digite o valor de dias em horas desejado: "))
let horasDigitadas = parseInt(prompt("Digite o horário desejado: "))
let minutosDigitados = parseInt(prompt("Digite os minutos que deseja: "))
let segundosDigitados = parseInt(prompt("Digite os segundos desejado: "))
for (let dias = diasDigitados; dias > -1; dias--) {
    for (let horas = horasDigitadas; horas > -1; horas--) {
        for (let minutos = minutosDigitados; minutos > -1; minutos--) {
            for (let segundos = segundosDigitados; segundos > -1; segundos--) {
                console.log(dias+ " : " + horas + " : " + minutos + " : " + segundos)
            }
            segundosDigitados = 59
        }
        minutoDigitados = 59
    }
    horasDigitadas = 23
}