let elemento = document.querySelector(".sinopsis")
let texto = elemento.textContent.slice(0)
let extenderTexto;
let encogerTexto;
let newTexto;


newTexto = elemento.textContent.slice(0,150)
elemento.innerHTML = newTexto
extenderTexto = document.querySelector(".extenderSinopsis")


extenderTexto.addEventListener("click",()=>{
    if (elemento.textContent.length <= 160){
        elemento.innerHTML = texto
        extenderTexto.textContent = "...Ver Menos"
    } else {
        elemento.innerHTML = newTexto
        extenderTexto.textContent = "...Ver Mas"
    }
})