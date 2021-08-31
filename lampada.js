"use strict"

const lampada = document.getElementById("lampada")

function lampadaInteira() {
    return lampada.src.includes("ligada")
}

function piscarLampada() {
    const botaoPiscar = document.getElementById("Piscar")
    if (botaoPiscar.textContent == "Piscar") {
    const contador = setInterval(ligarLampada, 350)
    const contador2 = setInterval(desligarLampada, 500)
    botaoPiscar.textContent = "Parar"
    }
    else {

    }
}

function pararLamapda() {

}

function ligarLampada() {
    if (lampadaInteira()){
    lampada.src="img/ligada.jpg"
    }
}

function desligarLampada() {
    if (lampadaInteira()){
    lampada.src="img/desligada.jpg"
    }
}

function quebrarLampada() {
    lampada.src="img/quebrada.jpg"
}

//eventos
document.getElementById("Ligar")
    .addEventListener("click", ligarLampada);

document.getElementById("Desligar")
    .addEventListener("click", desligarLampada);

document.getElementById("lampada")
    .addEventListener("dblclick", quebrarLampada);

document.getElementById("lampada")
    .addEventListener("mouseover", ligarLampada);

document.getElementById("lampada")
    .addEventListener("mouseout", desligarLampada);

document.getElementById("Piscar")
    .addEventListener("click", piscarLampada);

document.getElementById("Parar")
    .addEventListener("click", piscarLampada);
