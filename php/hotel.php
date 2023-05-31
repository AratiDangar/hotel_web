<?php

header('Access-Control-Allow-Origin: http://localhost/php/hotel.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: 'X-Requested-With,content-type'");
header("Access-Control-Allow-Methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE'");




if($_SERVER['REQUEST_METHOD']=='POST'){

$name=$_POST['fname'];
$email=$_POST['femail'];
$Messege=$_POST['fMessege'];


//connect to database

$servername="localhost";
$username="root";
$password="";
$database="hotel";


//connect with mysqli

$conn=mysqli_connect($servername,$username,$password,$database);

if(!$conn){

    die("sorry".mysqli_connect_error());
}


else{
    
$sql="INSERT INTO `contact` (`id`, `name`, `email`, `messege`) VALUES ( '','$name', '$email', '$Messege')";

$res=mysqli_query($conn,$sql);


if($res){
    echo 'your messege sent successfuly';
  
}
else{
    echo"error!";
}
$conn->close();
}
}

?>

