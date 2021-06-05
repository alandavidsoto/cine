
<header class="cabecera">
    <div class="logo-contenedor">
        <?php
            if ($_SERVER['PHP_SELF'] == "/Sitio Web CineFlow/index.php"){
                echo '<a href="#">
                    <img src="https://res.cloudinary.com/dcea83ydd/image/upload/v1622170585/logo_oypuxq.svg" alt="">
                </a>';
            }else {
                echo '<a href="../index.php">
                    <img src="https://res.cloudinary.com/dcea83ydd/image/upload/v1622170585/logo_oypuxq.svg" alt="">
                </a>';
            }
            
        ?>
        
    </div>
    <div class="icon-menu">
        <i class="fas fa-bars"></i>
    </div>
    <div class="icon-search">
        <i class="fas fa-search"></i>
    </div>
    
    <form class="buscador">
        <input type="text"  class="input" placeholder="¿Que Pelicula Buscas?">
        <button type="submit" class="submit">
            <i class="fas fa-search"></i>
        </button>
    </form>
    <div class="contenedor-resultados">
    </div>

    <nav class="barranav">
        <ul class="lista">
        <?php
            if ($_SERVER['PHP_SELF'] == "/Sitio Web CineFlow/index.php"){
                echo '<li class="elemento"><a href="cartelera/cartelera.php">Cartelera</a></li>
                <li class="elemento"><a href="precios/precios.php">Precios</a></li>
                <li class="elemento elemento-mapa"><a href="#">Ubicación</a></li>
                <li class="elemento elemento-redes"><a href="#">Redes Sociales</a></li>';
            }else {
                echo '<li class="elemento"><a href="../cartelera/cartelera.php">Cartelera</a></li>
                <li class="elemento"><a href="../precios/precios.php">Precios</a></li>
                <li class="elemento elemento-mapa"><a href="#">Ubicación</a></li>
                <li class="elemento elemento-redes"><a href="#">Redes Sociales</a></li>';
            }
            
        ?>
            
        </ul>
    </nav>
</header>