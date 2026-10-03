let nomeAluno = prompt("Digite o nome do aluno: ")
let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let nota3 = parseFloat(prompt("Digite a terceira nota: "))
let media = (nota1*2 + nota2*3 + nota3*5) / 10
alert("O aluno " + nomeAluno + " é de: "+ media)