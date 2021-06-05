const imagen = document.querySelector(".imagen")
const titulo = document.querySelector(".titulo")
const tipo = document.querySelector(".tipo")
const butacas = document.querySelector(".asientos")
const dia = document.querySelector(".fecha")
const hora = document.querySelector(".hora")
const precio = document.querySelector(".precio")


let informacionJson;
let precioPelicula;
const candyBar = document.querySelector(".candy-bar")
let agregarProducto = document.getElementsByClassName("candy-agregar");
let eliminarProducto = document.getElementsByClassName("candy-eliminar");
/* const cantidad = document.querySelector(".candy-cantidad-producto") */

const colocarProductos = async (data)=>{
    informacionJson = data;
    let productos = data;
    
    for (let index = 0; index < productos.length; index++) {
        candyBar.innerHTML += `
        <div>
            <img src="${productos[index].urlImagen}" alt="${productos[index].productos}">
            <span class="candy-precios">$${productos[index].precio}</span>
            <span class="candy-agregar"><i class="fas fa-plus-square"></i></span>
            <span class="candy-eliminar"><i class="fas fa-trash-alt"></i></span>
            <span class="candy-cantidad-producto"></span>
        </div>`
        
        setTimeout(()=>{
            let cantidad = 0
            agregarProducto[index].addEventListener("click",()=>{
                let padreElement= agregarProducto[index].parentElement;
                let cantidadElement = padreElement.querySelector(".candy-cantidad-producto")
                let precioElement = (padreElement.querySelector(".candy-precios").textContent).slice(1)
                precioElement = parseInt(precioElement)
                precioPelicula = parseInt(precioPelicula)+ precioElement
                precio.innerHTML = `<b>Precio:</b> $${precioPelicula}`
                cantidadElement.classList.add("cant-producto-active")
                cantidad = cantidad+1
                cantidadElement.textContent = `${cantidad}`

            })

            eliminarProducto[index].addEventListener('click',()=>{
                if (cantidad > 0){
                    let padreElement= agregarProducto[index].parentElement;
                    let cantidadElement = padreElement.querySelector(".candy-cantidad-producto")
                    let precioElement = (padreElement.querySelector(".candy-precios").textContent).slice(1)
                    precioElement = parseInt(precioElement)
                    precioPelicula = parseInt(precioPelicula)- precioElement
                    precio.innerHTML = `<b>Precio:</b> $${precioPelicula}`
                    cantidadElement.classList.add("cant-producto-active")
                    cantidad = cantidad-1
                    cantidadElement.textContent = `${cantidad}`
                    if (cantidad == 0){
                    cantidadElement.classList.remove("cant-producto-active")
                    }
                } 

            })
            
        },1)
    }
    /* agregarProducto = document.querySelector(".candy-agregar");
    eliminarProducto = document.querySelector(".candy-eliminar"); */
}
document.addEventListener("DOMContentLoaded",async ()=>{
    fetch("candyBar.json").then(res=>res.json()).then(data => colocarProductos(data))

    let imagenPelicula = sessionStorage.getItem("url")
    let tituloPelicula = sessionStorage.getItem("titulo")
    let tipoPelicula = sessionStorage.getItem("tipo")
    let butacasPelicula = sessionStorage.getItem("butacas")
    let diaPelicula = sessionStorage.getItem("dia")
    let horaPelicula = sessionStorage.getItem("horario")
    precioPelicula = sessionStorage.getItem("precio")

    imagen.setAttribute("src",imagenPelicula)
    titulo.innerHTML += tituloPelicula
    tipo.innerHTML += tipoPelicula;
    butacas.innerHTML += butacasPelicula;
    dia.innerHTML += diaPelicula;
    hora.innerHTML += `${horaPelicula} hs`;
    precio.innerHTML += `$${precioPelicula}`;
})



