<%@ page language="java"  contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>数据可视化平台</title>

<link rel="stylesheet" type="text/css" href="./duan/css/styles.css">
<style type="text/css">
body,td,th { font-family: "Source Sans Pro", sans-serif; }
body { background-color: #2B2B2B; }
h1{color:red;font-size:12px;}
</style>
<script type="text/javascript">

</script> 
</head>
<body>


<div class="wrapper">

	<div class="container">
		<h1>密码或用户名错误，请注册!!</h1>
		<!-- <form class="form"  name="form1" method="post" action="Login">
			<input type="text" name="userName" placeholder="请输入用户名">
			<input type="password" name="passWord" placeholder="请输入密码">
			<button type="submit" id="login-button">登陆</button>
		</form> -->
	<form class="form"  method="post" action="RegAction"/>
  		<input type="text" name="userName" placeholder="请输入用户名"/>
    	<input type="text" name="password" placeholder="请输入密码"/>
   		 <input type="submit" class="reg" name="Submit" value="注册" />
	</form>
	</div>
	
	<ul class="bg-bubbles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
	
</div>

<script type="text/javascript" src="./duan/js/jquery-2.1.1.min.js"></script>
<script type="text/javascript">
$('#login-button').click(function(event){
	event.preventDefault();
	$('form').fadeOut(500);
	$('.wrapper').addClass('form-success');
});
</script>

</body>
</html>