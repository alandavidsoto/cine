// le damos funcionalidad al icon menu
var referenciaMenu= false;

$(".icon-menu").click(function(){
    if (referenciaMenu == false){
        $(".barranav").animate({left:"0"})
        referenciaMenu = true
    } else {
        $(".barranav").animate({left:"100%"})
        referenciaMenu = false
    }
})

// le damos funcionalidad al icon search
$(".icon-search").click(()=>{
    $(".icon-search").fadeOut()
    $(".buscador").animate({right:'1%'},250)
})

//vamos a obtener los values de input
const contenedorResultados = document.querySelector(".contenedor-resultados")
const input = document.querySelector(".input")
input.addEventListener("input",async ()=>{        // utilizo javascript sin jquery xq parece que jquery no tiene el evento Input
     /* console.log(input.value) */                 // el cual me sirve a mi
    let arregloPelis = []
    let data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=bb9bebbe22190a909eeb659e8c7e93b9&language=es");
    let peliculas = await (data.json());
    peliculas = peliculas.results;
    if (input.value.length > 2) {
        peliculas.forEach(peli => {
            if (((peli.title).toLowerCase()).includes((input.value).toLowerCase())){
                arregloPelis.push(peli)

            }
            if (peliculas.indexOf(peli) == peliculas.length - 1 ){
                contenedorResultados.innerHTML = "";
                arregloPelis.forEach(element => {
                    if (document.URL.includes("index")){
                        contenedorResultados.innerHTML += `
                        <a href="pelicula/pelicula.php?id=${element.id}" class="resultado">
                            <img src="https://image.tmdb.org/t/p/w780${element.poster_path}" alt="${element.title}">
                            <span>${element.title}</span>
                        </a>`
                    } else{
                        contenedorResultados.innerHTML += `
                        <a href="../pelicula/pelicula.php?id=${element.id}" class="resultado">
                            <img src="https://image.tmdb.org/t/p/w780${element.poster_path}" alt="${element.title}">
                            <span>${element.title}</span>
                        </a>`
                    }
                    
                });
                
            }

        })
    } else {
        contenedorResultados.innerHTML = "";
    }
})


