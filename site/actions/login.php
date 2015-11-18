<?php
	
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		
		$login = $_POST["login"];
		$login = htmlspecialchars($login);
		$login = addslashes($login);
		
		$pass = $_POST["password"];
		$pass = htmlspecialchars($pass);
		$pass = addslashes($pass);
		
		/*$pass   = md5($pass);
		$pass   = strrev($pass);
		$pass   = "Uz1fkl93mb~".$pass."xoP0lkaWo";*/
		
		
		if($_POST["rememberMe"] == "yes"){
			setcookie('rememberMe',$login.'-'.$pass,time()+3600*24*31,"/");
		}
		
		
		if($login === 'admin' && $pass === '123456'){
			session_start();
			$_SESSION["user"] = "member";
			$_SESSION["user-login"] = $login;
			$_SESSION["user-pass"] = $pass;
			
			
			echo "member";
		}
		else{
			echo "guest";
		}
	}
	
?>