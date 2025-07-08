const nome1 = document.querySelector("#nome")
const peso1 = document.querySelector("#peso")
const altura1 = document.querySelector("#altura")
const p = document.querySelector("#mostrar")

function somar(){
    var peso = Number(peso1.value)
    var altura = Number(altura1.value)

    const resultado = (peso / (altura*altura)).toFixed(1)
    p.innerHTML = nome + ' seu IMC é :' + resultado
}

