<?php
	header("content-type:text/html;charset=utf-8");
	$db = mysqli_connect("localhost","root","");
	mysqli_select_db($db,"user1");
	mysqli_query($db,"set names utf-8");
	$img=$_POST["img"];
	$uname=$_POST["uname"];
	$cbs=$_POST["cbs"];
	$cbrq=$_POST["cbrq"];
	$price=$_POST["price"];
	$kg=$_POST["kg"];
	$sql = "insert into details (img,uname,cbs,cbrq,price,kg) values ('$img','$uname',$cbs,$cbrq,'$price','$kg')";
	$row = mysqli_query($db,$sql);
	if($row){
		echo "<script>alert('插入信息成功');location.href='shuru.html'</script>";
	}else{
		echo "<script>alert('插入信息失败');location.href='shuru.html'</script>";
	}
?>