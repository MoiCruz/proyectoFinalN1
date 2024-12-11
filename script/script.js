const borrar = document.querySelector(`#borrar`)
const hipoteca = document.querySelector(`#hipoteca`)
const plazo = document.querySelector(`#plazo`)
const tazaDeInteres = document.querySelector(`#tazaDeInteres`)
//imputs radio//
const tipoDeHipoteca = document.querySelector(`#tipoDeHipoteca`)
const soloInteres = document.querySelector(`#soloInteres`)
//ventana de resultados//
const imagen1 = document.querySelector(`#imagen1`)
const calcular = document.querySelector(`#calcular`)
const Resultados = document.querySelector(`#Resultados`)
const pagosMensuales = document.querySelector(`#pagosMensuales`)
const pagoTotal = document.querySelector(`#pagoTotal`)
//error campo cero//
const errorHipoteca = document.querySelector(`#errorHipoteca`)
const errorPlazo = document.querySelector(`#errorPlazo`)
const errorTasa = document.querySelector(`#errorTasa`)
const errorType = document.querySelector(`#errorType`)
const errorInteres = document.querySelector(`#errorInteres`)


calcular.addEventListener(`click`, respuesta)




//funcion ventana de resultados//
function respuesta(e){
    imagen1.classList.add(`d-none`)
    Resultados.classList.remove(`d-none`)
    pagosMensuales.textContent = 1000
    pagoTotal.textContent = 10000
}

