/* verao: 21 dez a 20 mar
outono: 21 mar a 20 jun
inverno: 21 de junho a 20 set
primavera: 21 set 20 dez*/

let estacao, trimestre

alert("Descubra a estação que você está. ")
let mes = parseInt(prompt("Digite o mês de hoje com número (ex: 1 para janeiro...): "))
let dia = parseInt(prompt("Digite o dia de hoje:"))

switch(mes){
    case 1:
    trimestre = 1
    break;

    case 2:
        trimestre = 1
        break;

    case 3:
        trimestre = 1
        break;

    case 4:
        trimestre = 2
        break;
    
    case 5: 
        trimestre = 2
        break;

    case 6:
        trimestre = 2
        break;

    case 7:
        trimestre = 2
        break;

    case 8:
        trimestre = 3
        break;

    case 9:
        trimestre = 3
        break;

    case 10:
        trimestre = 3
        break;

    case 11:
        trimestre = 3
        break;
    case 12:
        trimestre = 1
        break;
}

switch(true){
    //verao
    case (mes == 12 && dia >= 21) ||
    mes == 1 ||
    mes == 2 ||
    (mes == 3 && dia <= 20):
        estacao = "Verão" 
        break;

    case (mes == 3 && dia >=21) ||
        mes == 4 ||
        mes== 5 ||
        (mes == 6 && dia <=20):
        estacao= "Outono"
        break;

    case (mes == 6 && dia >= 21) ||
        mes == 7 ||
        mes == 8 ||
        (mes == 9 && dia<=20 ):
        estacao = "Inverno"
        break;

    case (mes == 9 && dia >=21) ||
         mes == 10 ||
         mes == 11 ||
         (mes == 12 && dia<= 20):
         estacao = "Primavera"
        default: ("Opção inválida.")
}

alert ("A estação atual é: " + estacao)
  