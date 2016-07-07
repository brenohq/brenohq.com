<?php
if (empty($_POST['name'])  ||
empty($_POST['email']) 	 ||
empty($_POST['message']) ||
!filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) {
  echo "Preenchimento inválido!";
  return false;
}

$name          = $_POST['name'];
$email_address = $_POST['email'];
$message       = $_POST['message'];

$to            = 'contato@brenohq.com';
$email_subject = "Contato do Site:  $name";
$email_body    = "Você recebeu uma mensagem a partir de www.brenohq.com\n\n"."Detalhes:\n\nNome: $name\nEmail: $email_address\nMensagem:\n$message";
$headers       = "From: contato@brenohq.com\n";
$headers      .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
