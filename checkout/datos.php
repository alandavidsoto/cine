<?php
$numeroTarjeta = $_GET['tarjeta'];
$nombreApellido = $_GET['nombre'];
$expiracion = $_GET['expiracion'];
$cvc = $_GET['cvc'];

$array_verificador = array(
    "tarjeta" => "1674569745647429",
    "nombre" => "alan david soto",
    "expiracion" => "10/26",
    "cvc" => "068");

if (!empty($numeroTarjeta) && !empty($nombreApellido) && !empty($expiracion) && !empty($cvc)){
    /* if (($numeroTarjeta == $array_verificador['tarjeta']) &&  ($nombreApellido == $array_verificador['nombre']) && ($expiracion == $array_verificador['expiracion']) &&  ($nombreApellido == $array_verificador['nombre']) && ($cvc == $array_verificador['cvc'])) {
        echo "Gracias por tu Compra, la transaccion se ha finalizado Correctamente";
    } else {
        echo "nooooo";
    } */
    verificador($numeroTarjeta,$nombreApellido,$expiracion,$cvc);
} else {
    echo "Esta todo mal boludo";
}

function verificador($numeroTarjeta,$nombreApellido,$expiracion,$cvc){
    global $array_verificador;
    if (($numeroTarjeta == $array_verificador['tarjeta']) &&  ($nombreApellido == $array_verificador['nombre']) && ($expiracion == $array_verificador['expiracion']) &&  ($nombreApellido == $array_verificador['nombre']) && ($cvc == $array_verificador['cvc'])) {
        echo "Gracias por tu Compra, la transaccion se ha finalizado Correctamente";
    } else {
        echo "nooooo";
    }
} 
?>