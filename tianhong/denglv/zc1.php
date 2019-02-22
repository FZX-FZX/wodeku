<?php
	header("content-type:text/html;charset=utf-8");
	$uname=$_POST["uname"];
	$pwp=$_POST["pwp"];
	$db = mysqli_connect("localhost","root","");
	mysqli_select_db($db,"user1");
	mysqli_query($db,"set names utf-8");
//	$sql="select * from user where uname='$uname'";
//	$row = mysqli_query($db,$sql);
//	while($arr=mysqli_fetch_array($row)){
//		if($arr["uname"]==$uname){
//			echo "<script>alert('该账户已存在，请重新注册');location.href='register.html'</script>";
//			break;
//		}
//	}
	$sq2="insert into user (uname,pwp) values ('$uname','$pwp')";
	$row2 = mysqli_query($db,$sq2);
	echo $row2;
	if($row2){
		echo 1;
	}else{
		echo 0;
	}
?>