<?php 

$id = $_GET['id'];
$info;
$data = json_decode(file_get_contents("https://api.themoviedb.org/3/movie/popular?api_key=bb9bebbe22190a909eeb659e8c7e93b9&language=es"),true);
/* print_r($data) ; */
foreach ($data["results"] as $key => $value) {
    if($value["id"] == $id) {
        $info =$value;
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="pelicula.css?2">
    <link rel="stylesheet" href="../componentesHtml/cabecera.css">
    <link rel="stylesheet" href="../componentesHtml/footer.css?1">
    <link rel="stylesheet" href="../componentesHtml/calendario.css?1">
    <link rel="stylesheet" href="../componentesHtml/slider.css?1">
    <script src="https://kit.fontawesome.com/27afa08620.js" crossorigin="anonymous"></script>
    <script src="../jquery-3.6.0.min.js"></script>
    <title>CineFlow | Tu Cine de Preferencia</title>
</head>

<body>
    <div id="contenedor-pelicula">
        <?php
        include('../componentesHtml/cabecera.php')
        ?>
        <form class="form" action="../checkout/datos.php" method="POST">
            <div class="seccion" style="">
                <div class="articulo">
                    <div class="contenedor-imagen">
                        <img src="https://image.tmdb.org/t/p/w780<?php echo $info["poster_path"]?>" alt="<?php echo $info["title"]?>">
                    </div>
                    <div class="contenedor-descripcion">
                        <span class="descripcion">
                            <b>Titulo:</b> <?php echo $info["title"]?><br>
                            <b>Director:</b> Christopher Nolan<br>
                            <b>Genero:</b> Ciencia Ficcion<br>
                            <b>Duracion:</b> 169 Minutos<br>
                            <b>Clasificacion:</b> PG-13<br>
                            <b>Sinopsis:</b> <span class="sinopsis"><?php echo $info["overview"]?></span>
                            <div class="extenderSinopsis">...Ver Mas</div>
                        </span>
                    </div>
                </div>
                <div class="funciones">
                    <h2 class="titulo-funciones">FUNCIONES DISPONIBLES</h2>

                    <div class="opciones-funciones">
                        <label>Seleccione Horario</label>
                        <input class="selectedDay" type="date" name="dia" id="" required="">
                        <span class="calendario">
                            <i class="far fa-calendar-alt"></i>
                        </span>
                        <?php
                        include('../componentesHtml/calendario.php')
                        ?>
                    </div>
                    <div class="opciones-funciones">
                        <label>Seleccione el Tipo</label>
                        <select class="selected-tipofuncion" name="tipo" required="">
                            <option value="2D">2D</option>
                            <option value="3D">3D</option>
                        </select>
                    </div>
                    <div class="opciones-funciones">
                        <label>Seleccione Horario</label>
                        <select class="selected-horariofuncion" name="horario" required="">
                            <option value="14:00">14:00</option>
                            <option value="17:00">17:00</option>
                            <option value="20:00">20:00</option>
                            <option value="23:00">23:00</option>
                        </select>
                    </div>
                    <div class="opciones-funciones">
                        <h4>Valor de la Entrada:</h4>
                        <h3 class="precio-entrada">$0</h3>
                    </div>
                </div>
            </div>
            <div class="container-butacas-y-slider">
                <div class="caja-butacas">
                    <h3>Elija sus Butacas</h3>
                    <div class="butacas">
                        <h3>PANTALLA</h3>
                        <div class="caja-asientos">
                        </div>
                    </div>
                    <!-- <a href="../checkout/checkout.php" class="boton-checkout">
                    Checkout
                </a> -->
                    <input type="submit" value="Checkout" class="boton-checkout">
                </div>
                <div class="caja-slider">
                    <h3>Otras peliculas</h3>
                    <?php
                    include('../componentesHtml/slider.php')
                    ?>
                </div>


                <div class="clearfix"></div>
            </div>
            <input type="text" value="https://image.tmdb.org/t/p/w780<?php echo $info["poster_path"]?>" name="urlImage" style="display:none" required="">
            <input type="text" value="<?php echo $info["title"]?>" name="titulo" style="display:none" required="">
            <input type="text" name="butacas" style="display:none" class="butacas-pelicula">
            <input type="text" name="precio" style="display:none" class="precio-pelicula" required="">
        </form>
        <?php
            include("../componentesHtml/footer.html") 
        ?>
    </div>

    <script src="../jquery-3.6.0.min.js"></script>
    <script src="scriptCalendario.js"></script>
    <script src="script.js" type="module"></script>
    <script src="../componentesHtml/slider.js"></script>
    <script src="maxChar.js"></script>
    <script src="../componentesHtml/cabeceraMobile.js"></script>
</body>

</html>