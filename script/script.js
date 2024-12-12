//displays para capturar//
const borrar = document.querySelector(`#borrar`)
const hipoteca = document.querySelector(`#hipoteca`)
const plazo = document.querySelector(`#plazo`)
const tasaDeInteres = document.querySelector(`#tasaDeInteres`)
//imputs radio//
const tipoDeHipoteca = document.querySelector(`#tipoDeHipoteca`)
const soloInteres = document.querySelector(`#soloInteres`)
//ventana de resultados//
const imagen1 = document.querySelector(`#imagen1`)
const calcular = document.querySelector(`#calcular`)
const Resultados = document.querySelector(`#Resultados`)
const pagosMensuales = document.querySelector(`#pagosMensuales`)
const pagoTotal = document.querySelector(`#pagoTotal`)

/*const form = document.querySelector('#form')

function calcular(e) {
    e.preventDefault() 
    const formData = new FormData(form)
    let valor1 = formData.get('hipoteca'); 
    let valor2 = formData.get('plazo'); 
    let valor3 = formData.get('tazaDeInteres');

    
    console.log(form.elements.hipoteca);
    
    errores(valor1, form.elements.hipoteca)
    errores(valor2, form.elements.plazo)
    errores(valor3, form.elements.tazaDeInteres)
}

function errores(value, element) {
    if (value === "") {
        element.parentElement.classList.add('error')
    } else {
        element.parentElement.classList.remove('error')
    }
}

form.addEventListener('submit', calcular)*/

calcular.addEventListener(`click`, respuesta)



//funcion ventana de resultados//
function respuesta(e){
    imagen1.classList.add(`d-none`)
    Resultados.classList.remove(`d-none`)
    pagosMensuales.textContent = 1000
    pagoTotal.textContent = 10000
}

