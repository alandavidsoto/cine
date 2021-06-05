$(".boton-up").click(arriba)
$(".boton-down").click(abajo)
var sliderItems;
var pseudoindice;

$(document).ready(async function(){
    const fetchPeliculas = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=bb9bebbe22190a909eeb659e8c7e93b9&language=es");
    const dataPeliculas = await fetchPeliculas.json()
    const peliculas = dataPeliculas.results

    const slider = document.querySelector(".slider")
    for (let index = 1; index <= 3; index++) {
        slider.innerHTML += `<a href="#" class="slider-item">
        <img src="https://image.tmdb.org/t/p/w342${peliculas[index].poster_path}" alt="${peliculas[index].title}">
        </a>`;
    }
    sliderItems = $(".contenedor-slider .slider-item").length
    $(".contenedor-slider .slider-item").hide();
    $(".contenedor-slider .slider-item:nth-child(1)").show();
    pseudoindice = 1
})

function arriba(){
    pseudoindice--
    if (pseudoindice < 1){
        pseudoindice = sliderItems
    }
    $(".contenedor-slider .slider-item").hide();
    $(".contenedor-slider .slider-item:nth-child("+ pseudoindice +")").fadeIn();
}

function abajo(){
    pseudoindice++
    if (pseudoindice > sliderItems){
        pseudoindice = 1
    }
    $(".contenedor-slider .slider-item").hide();
    $(".contenedor-slider .slider-item:nth-child("+ pseudoindice +")").fadeIn();
}


setInterval(function(){
    abajo()
},7000);