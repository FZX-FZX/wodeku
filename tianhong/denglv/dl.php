<?php
	header("content-type:text/html;charset=utf-8");
	$uname=$_POST["uname"];
	$pwp=$_POST["pwp"];
	$db = mysqli_connect("localhost","root","");
	mysqli_select_db($db,"user1");
	mysqli_query($db,"set names utf-8");
	$sql="select * from user where uname='$uname' and pwp='$pwp'";
//	echo $sql;
	$row = mysqli_query($db,$sql);
	while($arr=mysqli_fetch_array($row)){
			if($arr["uname"]==$uname && $arr["pwp"]==$pwp){
				echo 1;
				break;
			}
		}
//	echo  0;
?>