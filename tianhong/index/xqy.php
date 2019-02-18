<?php
	header("content-type:text/html;charset=utf-8");
	$db = mysqli_connect("localhost","root","");
	mysqli_select_db($db,"user1");
	mysqli_query($db,"set names utf-8");
	$sql="SELECT * FROM details";
	$row=mysqli_query($db,$sql);
	while($arr = mysqli_fetch_array($row)){
		$arr1[] = $arr;
	};
	$json = json_encode($arr1);
	echo $json;
?>