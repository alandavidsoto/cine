<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="checkout.css?4">
    <link rel="stylesheet" href="../componentesHtml/cabecera.css">
    <link rel="stylesheet" href="../componentesHtml/footer.css">
    <script src="https://kit.fontawesome.com/27afa08620.js" crossorigin="anonymous"></script>
    <script src="../jquery-3.6.0.min.js"></script>
    <title>CineFlow | Tu Cine de Preferencia</title>
</head>

<body>
    <div id="contenedor-contenedor-checkout">
    <?php
        include('../componentesHtml/cabecera.php')
    ?>
    <div class="contenedor-checkout">
        <h1 class="titulo-checkout">Checkout</h1>
        <div class="boton-volver">
            <a href=".."><i class="fas fa-arrow-left"></i></a>
        </div>

        <div class="detalles-checkout">
            <div class="contenedor-imagen">
                <img class="imagen" src="" alt="">
            </div>
            <div class="card">
                <h2 class="dia">TICKET</h2>
                <span class="titulo"><b>Pelicula:</b> </span>
                <span class="tipo"><b>Tipo:</b> </span>
                <span class="asientos"><b>Butacas:</b> </span>
                <span class="fecha"><b>Dia:</b> </span>
                <span class="hora"><b>Horario:</b> </span>
                <span class="sucursal"><b>sucursal:</b> Cinepolis Caballito</span>
                <span class="precio" style="color:#48ff37;font-weight: bold;font-size:15px"><b>Precio:</b> </span>
            </div>

            <div class="candy-bar">
                <span class="candy-tittle"> CANDY-BAR</span>

            </div>
        </div>
        <h2 class="metodos-pago">Metodos de pago</h2>
        <div class="contenedor-metodos">
            <div class="tarjeta">
                <h3>Tarjeta</h3>
                <i class="fab fa-cc-visa"></i>
            </div> 
            <form action="datos.php" class="formulario-tarjeta">
                <label for="" class="num-tarjeta">Numero de la Tarjeta
                    <input type="text" name="tarjeta" maxlength="16" placeholder="Introduzca los Numeros de su Tarjeta">
                </label>
                    
                <label for="" class="nombre-apellido">Nombre y Apellido
                    <input type="text" name="nombre" placeholder="Introduzca su Nombre y Apellido completo ">
                </label>
                    
                <label for="" class="expiracion">Fecha de Expiracion
                    <input type="text" name="expiracion" maxlength="5" placeholder="ejemplo: 10/26">
                </label>
                    
                <label for="" class="cvc">CVC
                    <input type="text" name="cvc" maxlength="3" placeholder="ejemplo: 086">
                </label>
                <label for="" class="comprar">
                    <input type="submit" value="COMPRAR" >
                </label>
            </form>
        </div>
        
    </div>



    <?php
        include("../componentesHtml/footer.html") 
    ?>
    </div>
    <script src="script.js"></script>
    <script src="../componentesHtml/cabeceraMobile.js"></script>
</body>

</html>