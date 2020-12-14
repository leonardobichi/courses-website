<?php

$destinatario = 'leonardobichi1@gmail.com';

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$headers = array(
    'From' => 'webmaster@example.com',
    'Reply-To' => 'webmaster@example.com',
    'X-Mailer' => 'PHP/' . phpversion()
);

//$header = "Enviado desde Codetecno";

$mensajeCompleto = "De: " . $correo  . "\n\n" . $mensaje . "\n\nAtentamente: " . $nombre . " " . $apellido;

$fueEnviado = mail($destinatario, $asunto, $mensajeCompleto);

echo "Mail enviado v2" . $fueEnviado;


/*
echo "<script>alert('Correo enviado exitosamente'</script>)";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>"
*/
?>
 