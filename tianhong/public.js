//判断一个数是否是素数
function isPrime(num){
	for (var i = 2; i < num; i++) {
		if(num%i == 0){
			return false;
		}
	}
	return true;
}
//封装一个通过id名称获取html元素的方法
function $id(id){
	return document.getElementById(id);
}
//获取minNum-maxNum之间的随机数
function getRand(startNum,endNum){
	//return parseInt(Math.random()*(endNum-startNum+1)) + startNum;
	//return Math.floor(Math.random()*(endNum-startNum+1)) + startNum;
	return Math.round(Math.random()*(endNum-startNum)) + startNum;
}
//获取十六进制随机颜色值。
function getColor(){
	var color = "#";
	var str = "0123456789abcdef";
	for (var i = 0; i < 6; i++) {
		//获取0-15一个随机数，用来获取十六进制字符串str的对应值。
		var rand = getRand(0,15);
		color += str.charAt(rand);
	}
	return color;
}
//获取六位随机 验证码
function getYZM(){
	var yzm = "";
	for (var i = 0; i < 6; i++) {
		var rand = getRand(48,122);
		if((rand >= 58 && rand <= 64) || (rand >= 91 && rand <= 96)){
			i--;
		}else{
			//获取数字 大小写字母 的字符 作为验证码保存下来
			yzm += String.fromCharCode(rand);
		}
	}
	return yzm;
}

//获取中文日期格式的日期
function dateToString(date){
		
	var str = "";
	//var date = new Date();//得到当前系统时间
	var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var d = date.getDate();
	var w = date.getDay();
	var h = date.getHours();
	var M = date.getMinutes();
	var s = date.getSeconds();
	//2018年X月X日 00:00:00 星期X
	str += y + "年" + toDB(m) + "月" + toDB(d) + "日";
	str += " " + toDB(h) + ":" + toDB(M) + ":" + toDB(s);
	str += " " + week[w];
	
	
	return str;
	
}
//个位数时间前加0;
function toDB(num){
	return num < 10 ? "0" + num : num;
}

//时间差函数 得到的是两时间之间相差的秒数。
function timeDif(startTime,endTime){
	return (endTime.getTime() - startTime.getTime())/1000;
}