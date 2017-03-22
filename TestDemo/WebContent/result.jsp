<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>数据可视化平台</title>
<link href='./gridly/css/jquery.gridly.css' rel='stylesheet' type='text/css'>
<link href='./gridly/css/sample.css' rel='stylesheet' type='text/css'>
<script src='./gridly/javascripts/jquery.js' type='text/javascript'></script>
<script src='./gridly/javascripts/jquery.gridly.js' type='text/javascript'></script>
<script src='./gridly/javascripts/sample.js' type='text/javascript'></script>
<script src='./gridly/javascripts/rainbow.js' type='text/javascript'></script>
 <!-- <script src='./map/echarts.js' type='text/javascript'></script> -->
 <script src="./echarts/echarts.js"></script>
 <style type="text/css"> 
	 .search_form{/* position:relative; */ height:31px; margin-right:200px;margin-top:150px;display:inline-block;} 
	.search_form:hover{-webkit-box-shadow:0 0 3px #999;-moz-box-shadow:0 0 3px #999} 
	.sinput{float:left; width:200px; height:30px; line-height:21px; padding:4px 7px; color:b3b3b3;  
	border:1px solid #999; border-radius:2px 0 0 2px; background-color:#fbfbfb;} 
	.sbtn{float:left; width:50px; height:31px; padding:0 12px; margin-left:-1px;  
	border-radius:0 2px 2px 0; border:1px solid #4d90fe; background-color:#4d90fe; cursor:pointer;  
	display:inline-block; font-size:12px; vertical-align:middle; color:#f3f7fc;position:absolute;} 
	.sbtn:hover{background:#4084f2} 
</style> 
</head>
<body>

<div class="content">
      <section class='example'>

		<div class='gridly'>
          <div class='brick large'>
		  	<div style="text-align: right;">
			<form action="#" method="get" class="search_form">
				<input type="text" id="search" class="sinput" placeholder="输入 回车搜索"autofocus x-webkit-speech> 
				<input type="submit" value="确认"class="sbtn" onclick="getSearch()">
			</form>
		  </div>
			
         </div>
          
		<!-- ---------显示数据-------------- -->
          <div class='brick large'>
			<div id="search1" style="width: 100%; height: 100%;"></div>
          </div>


          <div class='brick large'>
			<div id="search2" style="width: 100%; height: 100%;"></div>
         	
          </div>

          <div class='brick large'>

            <div id="search3" style="width: 100%; height: 100%;"></div>

          </div>

          <div class='brick large'>

            <div id="search4" style="width: 100%; height: 100%;"></div>

          </div>
          <div class='brick large'>

           <div id="search5" style="width: 100%; height: 100%;"></div>

          </div>
         
         
        </div>

      </section>
    </div>
    
<script type="text/javascript">

var count =0;
//搜索栏
function getSearch(){
     var content = document.getElementById('search').value;
     alert(content);
     count = count+1;
     idName = "search"+count;
     var  myChart1=echarts.init(document.getElementById(idName));;  
     alert(count);
   $.ajax({

			type:"post",
			data:{content:content},
			url:"common!Request.action",
			dataType:"text",
			success:function(results){
	          alert(results);
	          option1 = eval("("+results+")");
	          myChart1.setOption(option1);
			  
			},
			error:function(){
				alert("出错了");
			}
		}); 
 }  
 </script>
    
</body>
</html>