<?php

require 'vendor/swiftmailer/swiftmailer/lib/swift_required.php';

$data = json_decode(file_get_contents("php://input"));
$email = $data->email;
$name = $data->name;
$html = $data->message;

$email = filter_var($email, FILTER_SANITIZE_EMAIL);
// Validate e-mail address
if(!$email)
{
	return false;
}
else
{
	$name = filter_var($name, FILTER_SANITIZE_SPECIAL_CHARS);
	$html = filter_var($html, FILTER_SANITIZE_SPECIAL_CHARS);

	$transport = Swift_SmtpTransport::newInstance('smtp.mandrillapp.com', 587);
	$transport->setUsername('pollen8');
	$transport->setPassword('3105c276-1f9d-45e7-962e-6b428fa877de');
	$swift = Swift_Mailer::newInstance($transport);

	$message = new Swift_Message('rob.clayburn contact');
	$message->setFrom($email);
	$message->setBody($html, 'text/html');
	$message->setTo('fabrikar@gmail.com');

	$return = new stdClass;

	if ($recipients = $swift->send($message, $failures))
	{
		$return->success = true;
	} else {
		$return->success = false;
		$return->errors = ($failures);
	}

	echo json_encode($return);
}
