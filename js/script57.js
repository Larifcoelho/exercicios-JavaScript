const element = document.getElementById('texto')

function textoNovo() {
    return "texto diferente do primeiro texto"
}

let texto = textoNovo()

element.innerHTML = texto