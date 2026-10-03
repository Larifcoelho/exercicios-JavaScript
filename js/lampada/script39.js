function acenderLampada() {
    document.getElementById("lampada").src = "img/lampadaon.png"
    document.getElementById("titulo").innerText = "Deseja apagar a lâmpada?"

}
function apagarLampada() {
    document.getElementById("lampada").src = "img/lampadaoff.png"
    document.getElementById("titulo").innerText = "Deseja acender a lâmpada?"
}
