document.addEventListener("DOMContentLoaded",async ()=>{
    let data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=bb9bebbe22190a909eeb659e8c7e93b9&language=es");
    let peliculas = await (data.json());
    peliculas = peliculas.results;
    crearCard(peliculas)
})

function crearCard(data){
    const seccion = document.querySelector(".peliculas")
    let fragment = document.createDocumentFragment()
    for (let i= 0; i<=19; i++){
        numero = 19-i;
        if (numero%2 == 0) {
            let pelicula = data[numero];
            const articulo = document.createElement("article");
            articulo.setAttribute("class","articulo")
            articulo.innerHTML = `
            <a href="Pelicula/pelicula.php?id=${pelicula.id}">
                <img src="https://image.tmdb.org/t/p/w780${pelicula.poster_path}" alt="${pelicula.original_title}">
            </a>`
/*             articulo.setAttribute("href",`../Pelicula/pelicula.php?id=${pelicula.id}`);
            articulo.setAttribute("class","articulo");
            articulo.innerHTML = plantilla;
            articulo.children[0].src = `https://image.tmdb.org/t/p/w780${pelicula.poster_path}`
            articulo.children[1].innerHTML = `${pelicula.original_title}` */
            fragment.appendChild(articulo)
            /* console.log(articulo.children[0].src) */
        }
    }
    seccion.appendChild(fragment)
} 