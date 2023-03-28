//const robotron = document.querySelector("#robotron")
const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
//console.log(estatistica)
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => { 
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados (operacao, controle) {

    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca) {
//  console.log(pecas[peca])

    estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

//robotron.addEventListener("click", () => { // pode-se colocar , function() ou () => nas versoes mais atuais do js
//    console.log("Cliquei no robô")
//})

//    function dizOi() {
//       console.log("Oi")
//        console.log("Bem vindo ao Robotron 2000")
//    }

//    dizOi()
//somar.addEventListener("click", () => {manipulaDados("somar")})

//subtrair.addEventListener("click", () => {manipulaDados("subtrair")})