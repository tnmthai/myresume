<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	
	$to = "thaitrannzl@gmail.com"; // replace with your email address
	$subject = "New message from $name";
	$body = "Name: $name\nEmail: $email\n\n$message";
	
	if (mail($to, $subject, $body)) {
		echo "Message sent successfully.";
	} else {
		echo "Message delivery failed.";
	}
}
?>
