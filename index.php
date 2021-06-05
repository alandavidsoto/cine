<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilosGenerales.css?4">
    <link rel="stylesheet" href="componentesHtml/cabecera.css?3">
    <link rel="stylesheet" href="componentesHtml/footer.css?2">
    <script src="https://kit.fontawesome.com/27afa08620.js" crossorigin="anonymous"></script>
    <title>CineFlow | Tu Cine De Preferencia</title>
    <script src="jquery-3.6.0.min.js"></script>
</head>

<body >
    <div id="contenedor">
        <?php
            include("componentesHtml/cabecera.php")
        ?>
        <section class="secciones" >
            <h1 class="titulo">Peliculas</h1>
            <section class="peliculas" >
                <!-- <article class="articulo">
                    <img src="images/Peliculas/1.jpg" alt="Batman">
                </article> -->
            </section>

            <div class="gallery">
                <div class="imagen-1">
                    <img  src="https://res.cloudinary.com/dcea83ydd/image/upload/v1622170917/Banners/familyHappy_yylt8m.jpg" alt="Cinema" >
                </div>
                <div class="imagen-2">
                    <img src="https://res.cloudinary.com/dcea83ydd/image/upload/v1622170917/Banners/CinemaQuarantine1_deudy4.jpg" alt="Cinema2" >
                </div>
                <div class="imagen-3" >
                    <img src="https://res.cloudinary.com/dcea83ydd/image/upload/v1622170911/Banners/CinemaQuarantine2_wkwoer.jpg" alt="Cinema3" >
                </div>
                
                
            </div>
        </section>

        
    
    <?php
        include("componentesHtml/footer.html")
    ?>
    </div>
    <script src="script.js"></script>
    <script src="componentesHtml/cabeceraMobile.js"></script>
    
</body>

</html>