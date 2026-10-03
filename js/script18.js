let numeroDoUsuario = parseInt(prompt("Digite um número e descubra a tabuada: "))
let contadora = 1

while(contadora <=10){
    let resultado = numeroDoUsuario * contadora
    console.log(contadora + "X" + numeroDoUsuario + "=" + resultado)
    contadora++

}