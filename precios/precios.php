<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="precios.css">
    <link rel="stylesheet" href="../componentesHtml/cabecera.css">
    <link rel="stylesheet" href="../componentesHtml/footer.css">
    <script src="../jquery-3.6.0.min.js"></script>
    <title>Precios | CineFlow</title>
</head>

<body >
    <div id="contenedor-precios">
        <?php
            include('../componentesHtml/cabecera.php')
        ?>
        <section class="seccion">
            <h2 class="titulo">Precios</h2>

            <div class="tabla">
                <div class="fila fila1">
                    <span>Tipo</span>
                    <span>Lun</span>
                    <span>Mar</span>
                    <span>Mie</span>
                    <span>Jue</span>
                    <span>Vie</span>
                    <span>Sab</span>
                    <span>Dom</span>
                </div>
                <div class="fila fila2">
                    <span>2D</span>
                    <span>$230</span>
                    <span>$230</span>
                    <span>$320</span>
                    <span>$150</span>
                    <span>$320</span>
                    <span>$230</span>
                    <span>$170</span>
                </div>
                <div class="fila fila3">
                    <span>3D</span>
                    <span>$370</span>
                    <span>$370</span>
                    <span>$250</span>
                    <span>$370</span>
                    <span>$390</span>
                    <span>$230</span>
                    <span>$370</span>
                </div>
            </div>
        </section>
        <?php
        include('../componentesHtml/footer.html')
        ?>
    </div>
    <script src="../componentesHtml/cabeceraMobile.js"></script>
</body>

</html>