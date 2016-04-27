<?php
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];
 

$address = "abrunov@loyaltylabs.ru,artem.belyakov@o-labs.ru";
$sub = "Сообщение с сайта Olabs";
$mes = "
Имя отправителя: $name 
Электронный адрес отправителя: $email
Тема: $subject
Текст сообщения:
$message";
 
if(isset($_POST['send-me-copy'])) {
	$address .= ',' . $_POST["email"];
}
 
if (!empty($name) and !empty($email) and !empty($subject) and !empty($message)) {
	$from  = "From: $name <$email> \r\n Reply-To: $email \r\n"; 
	if (mail($address, $sub, $mes, $from)) {
		echo "Ваше сообщение успешно отправлено!";
	}
}