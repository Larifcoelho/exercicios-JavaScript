let area = 0
let nome = prompt("Digite o nome do cômodo: ")
let largura = parseFloat(prompt("Digite a largura do cômodo: "))
let comprimento = parseFloat(prompt("Digite o comprimento do cômodo: "))
let respostaUsuario = "SIM"
while(respostaUsuario === "SIM"){
    let area = largura * comprimento
    alert("A área do(a) " + nome + " é de: " + area + " metros.")
     respostaUsuario = prompt ("Deseja continuar os calculos? Responda com SIM ou NÃO: ")
}