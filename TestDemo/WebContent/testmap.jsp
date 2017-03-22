<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="utf-8">
    <title>ECharts</title>
    <!-- 引入 echarts.js -->
    <script src="./echarts/echarts.js"></script>
</head>
<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/javascript">
    	var mycharts = echarts.init(document.getElementById("main"));
    	option = {
    		    tooltip: {
    		        trigger: 'item',
    		        formatter: '{b}'
    		    },
    		    series: [
    		        {
    		            name: '中国',
    		            type: 'map',
    		            mapType: 'china',
    		            selectedMode : 'multiple',
    		            label: {
    		                normal: {
    		                    show: true
    		                },
    		                emphasis: {
    		                    show: true
    		                }
    		            },
    		            data:[
    		                {name:'广东', selected:true}
    		            ]
    		        }
    		    ]
    		};
    	
    </script>
</body>
</html>