<?php
	$email_to = "flaviocolonnaromano@altervista.org";

	$email_subject = $_POST['inputObject'];

	$first_name = $_POST['inputName'];
	// required

	$email_from = $_POST['inputEmail'];
	// required

	$email_comments = $_POST['inputMessage'];
	// required

	$email_message = "Form details below.\n\n";

	function clean_string($string) {

		$bad = array("content-type", "bcc:", "to:", "cc:", "href");

		return str_replace($bad, "", $string);

	}

	$email_message .= "Nome: " . clean_string($first_name) . "\n";

	$email_message .= "Email: " . clean_string($email_from) . "\n";

	$email_message .= "Messaggio: " . clean_string($email_comments) . "\n";

	$headers = 'From: ' . $email_from . "\r\n" . 'Reply-To: ' . $email_from . "\r\n" . 'X-Mailer: PHP/' . phpversion();

	if (mail($email_to, $email_subject, $email_message, $headers)) {
		$data = array('success' => true, 'message' => 'Grazie! Ho ricevuto il tuo messaggio.');
		echo json_encode($data);

	} else {
		$data = array('success' => false, 'message' => 'Il messaggio non è stato ricevuto. Mail error: '.error_get_last());
		echo json_encode($data);
		exit ;

	}
?>