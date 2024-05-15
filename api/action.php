<?php

header("Access-Control-Allow-Origin:* ");

header("Access-Control-Allow-Headers:* ");

header("Access-Control-Allow-Methods:* ");

$connect = new PDO("mysql:host=127.0.0.1;dbname=testing", "root", "");

$method = $_SERVER['REQUEST_METHOD']; //return GET, POST, PUT, DELETE

if($method === 'GET')
{	
	//fetch all user

	$query = "SELECT * FROM sample_users ORDER BY id DESC";

	$result = $connect->query($query, PDO::FETCH_ASSOC);

	$data = array();

	foreach($result as $row)
	{
		$data[] = $row;
	}

	echo json_encode($data);
}

if($method === 'POST')
{
	$form_data = json_decode(file_get_contents('php://input'));

	$data = array(
		':full_name'		=>	$form_data->full_name,
		':password'		=>	password_hash($form_data->password, PASSWORD_BCRYPT),
        ':country'		=>	$form_data->country,
		':email'			=>	$form_data->email
	);

	$query = "
	INSERT INTO sample_users (full_name, password, email,country) VALUES (:full_name, :password, :email, :country);
	";

	$statement = $connect->prepare($query);

	$statement->execute($data);

	echo json_encode(["success" => "done"]);
}

?>
