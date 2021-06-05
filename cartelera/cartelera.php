
<!DOCTYPE html>
<html lang="en" >
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/27afa08620.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="cartelera.css?2">
    <link rel="stylesheet" href="../componentesHtml/cabecera.css?2">
    <link rel="stylesheet" href="../componentesHtml/footer.css?4">
    <script src="../jquery-3.6.0.min.js"></script>
    <title>Cartelera | CineFlow</title>
</head>
<body >
    <div id="contenedor-cartelera">
        <?php
        include("../componentesHtml/cabecera.php")
        ?>
        <section class="cartelera">
            <h1 class="titulo">Cartelera</h1>
            <section class="peliculas">
            </section>
        </section>
        <script src="script.js"></script>
        <?php
            include("../componentesHtml/footer.html") 
        ?>
    </div>
    <script src="../componentesHtml/cabeceraMobile.js"></script>
</body>
</html>