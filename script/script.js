// id de displays para capturar//
const borrar = document.querySelector(`#borrar`)
const hipoteca = document.querySelector(`#hipoteca`)
const plazo = document.querySelector(`#plazo`)
const tasaDeInteres = document.querySelector(`#tasaDeInteres`)
//id de imputs radio//
const tipoDeHipoteca = document.querySelector(`#reembolso`)
const soloInteres = document.querySelector(`#soloInteres`)
//id de las ventanas de resultados//
const imagen1 = document.querySelector(`#imagen1`)
const calcular = document.querySelector(`#calcular`)
const Resultados = document.querySelector(`#Resultados`)
const mensualidades = document.querySelector(`#mensualidades`)
const pagoTotal = document.querySelector(`#pagoTotal`)
// id de etiqueta <form> //
const form = document.querySelector('#form');

// funcion para mostrar error por falta de valores//
function mostrarError(e) {
  e.preventDefault(); 
  
  const formData = new FormData(form);
  let valor1 = formData.get('hipoteca');
  let valor2 = formData.get('plazo');
  let valor3 = formData.get('tasaDeInteres');
  let valor4 = formData.get('reembolso');
  let valor5 = formData.get('soloInteres');
  
  if (valor1 === "") {
    form.elements.hipoteca.closest('label').classList.add('vacio');
    form.querySelector('#dato1 + .errorCaptura').classList.remove('d-none'); 
  } else {
    form.elements.hipoteca.closest('label').classList.remove('vacio');
    form.querySelector('#dato1 + .errorCaptura').classList.add('d-none');
  }

  if (valor2 === "") {
    form.elements.plazo.closest('label').classList.add('vacio');
    form.querySelector('#dato2 + .errorCaptura').classList.remove('d-none'); 
  } else {
    form.elements.plazo.closest('label').classList.remove('vacio');
    form.querySelector('#dato2 + .errorCaptura').classList.add('d-none');
  }

  if (valor3 === "") {
    form.elements.tasaDeInteres.closest('label').classList.add('vacio');
    form.querySelector('#dato3 + .errorCaptura').classList.remove('d-none'); 
  } else {
    form.elements.tasaDeInteres.closest('label').classList.remove('vacio');
    form.querySelector('#dato3 + .errorCaptura').classList.add('d-none');
  }
  if (valor4 === "" && valor5 === "") {
    form.querySelector('#errorInteres').classList.remove('d-none');
  } else {
    form.querySelector('#errorInteres').classList.add('d-none'); 
  }
 
}
calcular.addEventListener('click', mostrarError);

//funcion para ejecutar calculadora//
     let mPrestamo = 0
     let tasa = 0
     let numeroDePagos = 0

function calculadora(){
    mPrestamo = parseInt(hipoteca.value)
    tasa = parseFloat(tasaDeInteres.value)/100/12
    numeroDePagos = parseInt(plazo.value )*12
    //Nota: aprendi sobre la funcion de "Math.pow" su sintaxis es la siguiente "Math.pow(base, exponente)" sirve para elevar una potecia asi como para obtener una raiz cuadrada o cubica//
    if(mPrestamo !==0 && tasa !==0 && numeroDePagos !==0){
        const numerador = mPrestamo * tasa * Math.pow(1 + tasa, numeroDePagos);
        const denominador = Math.pow(1 + tasa, numeroDePagos) - 1;
        const pagoMensual = numerador / denominador;
        
        const deudaTotal = pagoMensual * numeroDePagos
 //"Intl.NumberFormat" habilita la separacion por comas en los numeros mayores a 3 cifras//
        const formateador = new Intl.NumberFormat('en-US'); 

        mensualidades.textContent = formateador.format(pagoMensual.toFixed(2));
        pagoTotal.textContent = formateador.format(deudaTotal.toFixed(2));
    }
}
    hipoteca.addEventListener(`input`, calculadora) 
    plazo.addEventListener(`input`, calculadora) 
    tasaDeInteres.addEventListener(`input`, calculadora) 
    
//funcion ventana de resultados//
function respuesta(){
    imagen1.classList.add(`d-none`)
    Resultados.classList.remove(`d-none`) 
}
     calcular.addEventListener(`click`, respuesta)

//funcion para resetear displays, los resultados y revertir la imagen original//
function reset() {
    hipoteca.value = ""
    tasaDeInteres.value = ""
    plazo.value = ""
    mensualidades.textContent = ""
    pagoTotal.textContent = ""
    imagen1.classList.remove('d-none')
    Resultados.classList.add('d-none')

}
borrar.addEventListener('click', reset);