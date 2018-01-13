<?php 
	header("Access-Control-Allow-Origin: http://localhost:3000");
	
	// $subject = $_REQUEST['subject'];
	// $to = "longyarnz@gmail.com";
	
	// mail($to, $subject, $message);
	// echo json_encode($_REQUEST);

	// echo "Hello World";
	
	// header("location: http://localhost:3000");

	$to = "longyarnz@gmail.com";
	$name = @$_REQUEST['name'];
	$phone = @$_REQUEST['phone'];
	$email = @$_REQUEST['email'];
	$laptop = @$_REQUEST['laptop'];
	$problem = @$_REQUEST['problem'];
	$specs = @$_REQUEST['specs'];

	switch ($_REQUEST['type']) {
		case 'contact':
			$subject = "Customer Call";
			$message = "My name is $name and my phone number is $phone. Please call me urgently. I need HELP.";
			break;
		case 'Swap Your Old PC':
			$type = "Laptop Swap";
			$subject = "Laptop Swap Requested";
			$message = "Service Requested: $type,\nName: $name,\nPhone: $phone,\nEmail: $email,\nMy Laptop: $laptop,\nLaptop Specifications: $specs";
			break;
		case 'Contact Our Technicians':
			$type = "Consultation";
			$subject = "Customer Consultation";
			$message = "Service Requested: $type,\nName: $name,\nPhone: $phone,\nEmail: $email,\nProblem: $problem";
			break;
		case 'Buy A New PC':
			$type = "Laptop Purchase";
			$subject = "Laptop Purchase Requested";
			$message = "Service Requested: $type,\nName: $name,\nPhone: $phone,\nEmail: $email,\nLaptop Specifications: $specs";
			break;
		default:
			$type = "Laptop Repair";
			$subject = "Laptop Repair Requested";
			$message = "Service Requested: $type,\nName: $name,\nPhone: $phone,\nEmail: $email,\nMy Laptop: $laptop,\nProblem: $problem";
		break;
	}
	
	// if(mail($to, $subject, $message)){
		echo $message;
	// }
?>