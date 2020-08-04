<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hotel";

$con = mysqli_connect($servername, $username, $password, $dbname);
if(!$con){
  die("Connection Error " . mysqli_connect_error());
}else{

  $title = $_POST["title"];
  $fname = $_POST["fname"];
  $lname = $_POST["lname"];
  $day = $_POST["day"];
  $month = $_POST["month"];
  $year = $_POST["year"];
  $country = $_POST["country"];
  $email = $_POST["email"];
  $phone = $_POST["mobilenum"];
  $password = $_POST["password1"];

  $query = "INSERT INTO registration(title, firstname, lastname, day, month, year, country, email, phone, password)
   VALUES('$title', '$fname', '$lname', '$day', '$month', '$year', '$country', '$email', '$phone', '$password');";

   if(mysqli_query($con, $query)){
     echo "Registration Successful";
   }else{
     echo "Registration Failed";
   }
}

 ?>
