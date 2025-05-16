<?php
if($_SERVER['REQUEST_METHOD']==='POST'){
$name=htmlspecialchars(trim($_POST['name']));
$email=filter_var($_POST['email'],FILTER_SANITIZE_EMAIL);
$message=htmlspecialchars(trim($_POST['message']));
if(filter_var($email,FILTER_VALIDATE_EMAIL)&&$name&&$message){
mail('info@yourdomain.com','Contact Form',$message,'From:'.$email);
echo 'Success';
}else{
echo 'Invalid input';
}
}?>