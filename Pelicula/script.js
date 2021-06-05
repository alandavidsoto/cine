import {data} from './scriptCalendario.js';

const urlImagen = document.querySelector(".contenedor-imagen").children[0]
const titulo = document.querySelector(".contenedor-imagen").children[0]
const butacasPelicula = document.querySelector(".butacas-pelicula")
const precioPelicula = document.querySelector(".precio-pelicula")
const selectDia = document.querySelector(".selectedDay")
const selectedFuncion = document.querySelector(".selected-tipofuncion")
const selectHorario = document.querySelector(".selected-horariofuncion")



let arrayButacas = [];
const cajaAsientos = document.querySelector(".caja-asientos")
for (let i=0; i < 30; i++){
    cajaAsientos.innerHTML += `<div id="${i+1}" class="asiento">${i+1}</div>`
    setTimeout(()=>{
        cajaAsientos.children[i].addEventListener("click",()=>{
            if (cajaAsientos.children[i].attributes.class.value != "asiento asiento-active"){
                cajaAsientos.children[i].classList.add("asiento-active")
                arrayButacas.push(parseInt(cajaAsientos.children[i].textContent))
            } else{
                cajaAsientos.children[i].classList.remove("asiento-active")
                let x = arrayButacas.indexOf(parseInt(cajaAsientos.children[i].textContent))
                arrayButacas.splice(x,1)
            }
            
        })
    },50)
}

//-------------------------------------------------------------------------
// a partir de ACA comenzamos con codigo relacionado al Script Calendario

const calendarioIcon = document.querySelector(".calendario")
const containerCalendario = document.querySelector(".container")

calendarioIcon.addEventListener("click",()=>{
    containerCalendario.classList.toggle("calendario-display")
})

const actualizador = document.querySelector(".boton-actualizar")
const inputDate = document.querySelector(".selectedDay")
const selectFunction = document.querySelector(".selected-tipofuncion").addEventListener("change",()=> {
    let precioJson = obtenerPrecios();
    precioJson.then(res=>{
        colocarPrecios(res)
     })
})

let diaDeSemana;

actualizador.addEventListener("click",()=>{
    containerCalendario.classList.toggle("calendario-display")
    let año = data.ano
    let mes = ("0"+String(data.mes+1)).slice(-2)
    let dia = ("0"+String(data.dia)).slice(-2)
    inputDate.setAttribute("value",`${año}-${mes}-${dia}`)

    let fecha = new Date(data.ano,data.mes,data.dia)
    diaDeSemana = fecha.getDay()

    let precioJson = obtenerPrecios();

    precioJson.then(res=>{
       colocarPrecios(res)
    })
})




async function obtenerPrecios() {
    let datosFetch = await fetch("../precios/PreciosCine.json?1")
    let datos = await datosFetch.json()
    return datos
    
}

let precio;
function colocarPrecios(res) {
    const precioEntrada = document.querySelector(".precio-entrada")
    for (let index = 0; index < res.length; index++) {
        if (res[index].numberDia == String(diaDeSemana)) {
            let tipoFuncion = document.querySelector(".selected-tipofuncion").value
            if (tipoFuncion == "2D" ) {
                precio = res[index].segDimension
                precioEntrada.innerHTML = "$"+precio
                precioPelicula.setAttribute("value",precio)
                
            } else {
                precio = res[index].tercDimension;
                precioEntrada.innerHTML = "$"+precio
                precioPelicula.setAttribute("value",precio)
            }
        }
        
    }
}
//-------------------------------------------------------------------------------------
// ACA terminarmos con el Script del calendario
const formulario  = document.querySelector(".form")
formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    let butacas = "";
    for (let index = 0; index < arrayButacas.length; index++) {
        if (index == arrayButacas.length-1) {
            butacas += `${arrayButacas[index]}`
        } else {
            butacas += `${arrayButacas[index]}-`
        }
        
    }
    
    butacasPelicula.setAttribute("value",butacas)

    sessionStorage.setItem("url",`${urlImagen.attributes.src.value}`)
    sessionStorage.setItem("titulo",`${titulo.attributes.alt.value}`)
    sessionStorage.setItem("butacas",`${butacasPelicula.value}`)
    sessionStorage.setItem("precio",`${precioPelicula.value}`)
    sessionStorage.setItem("dia",`${selectDia.value}`)
    sessionStorage.setItem("tipo",`${selectedFuncion.value}`)
    sessionStorage.setItem("horario",`${selectHorario.value}`)
    window.open("../checkout/checkout.php","_self")
})