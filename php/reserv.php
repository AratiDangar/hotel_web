

<?php

header('Access-Control-Allow-Origin: http://localhost/php/reservation.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: 'X-Requested-With,content-type'");
header("Access-Control-Allow-Methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE'");




if($_SERVER['REQUEST_METHOD']=='POST'){

$fname=$_POST['fname'];
$email=$_POST['femail'];
$add1=$_POST['add1'];
$add2=$_POST['add2'];
$ad=$_POST['fad'];
$ch=$_POST['fch'];
$lname=$_POST['lname'];
$city=$_POST['fcity'];
$state=$_POST['fstate'];
$text=$_POST['ftext'];
$zip=$_POST['fzip'];
$no=$_POST['fno'];
$arrival=$_POST['farrival'];
$dept=$_POST['fdept'];

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
    
$sql="INSERT INTO `reservation` ( `id`,`first name`, `last name`, `street address`, `street address2`, `city`, `state`, `zipcode`, `phoneno.`, `email`, `arrival date/time`, `depturedate/ time`, `no. of adults`, `no.of child`, `request`) VALUES ('','$fname', '$lname', '$add1', '$add2', '$city', '$state', '$zip', '$no', '$email', '$arrival', '$dept', '$ad', '$ch', '$text')";

$res=mysqli_query($conn,$sql);


if($res){
    echo 'your reservation confirm';
  
}
else{
    echo"error!";
}
$conn->close();
}
}

?>

