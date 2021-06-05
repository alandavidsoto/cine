let plantilla = `<img src="" alt="">
<h4></h4>`

document.addEventListener("DOMContentLoaded", async ()=> {
     let data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=bb9bebbe22190a909eeb659e8c7e93b9&language=es");
     let peliculas = await (data.json());
     peliculas = peliculas.results;
     crearCard(peliculas)
})

const fragment = document.createDocumentFragment()
const seccion = document.querySelector(".peliculas")
function crearCard(data){ 
    data.forEach(pelicula => {
        const articulo = document.createElement("a");
        articulo.setAttribute("href",`../Pelicula/pelicula.php?id=${pelicula.id}`);
        articulo.setAttribute("class","articulo");
        articulo.innerHTML = plantilla;
        articulo.children[0].src = `https://image.tmdb.org/t/p/w780${pelicula.poster_path}`
        articulo.children[1].innerHTML = `${pelicula.original_title}`

        fragment.appendChild(articulo)
    });
    seccion.appendChild(fragment)
}


/* /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22 */
/* https://api.themoviedb.org/3/movie/550?api_key=bb9bebbe22190a909eeb659e8c7e93b9 */