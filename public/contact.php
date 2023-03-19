<?php 
  //creating connection to database
$con=mysqli_connect("localhost","root","","query") or die(mysqli_error());
  //check whether submit button is pressed or not
if((isset($_POST['submit'])))
{
  //fetching and storing the form data in variables
$Name = $con->real_escape_string($_POST['name']);
$Phone = $con->real_escape_string($_POST['contact']);
$Email = $con->real_escape_string($_POST['email']);
$Comments = $con->real_escape_string($_POST['text']);
  //query to insert the variable data into the database
$sql="INSERT INTO feedback (name, email, phone, comments) VALUES ('".$Name."','".$Email."', '".$Phone."', '".$Comments."')";
  //Execute the query and returning a message
if(!$result = $con->query($sql)){
die('Error occured [' . $conn->error . ']');
}
else
   header("location: test.html?Submitted");
}
?>