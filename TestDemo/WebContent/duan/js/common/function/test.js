function test(){
	var dom = document.getElementById("test2");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
		 title: {
        text: 'ECharts ����ʾ��'
    },
    tooltip: {},
    legend: {
        data:['����']
    },
    xAxis: {
        data: ["����","��ë��","ѩ����","����","�߸�Ь","����"]
    },
    yAxis: {},
    series: [{
        name: '����',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
if (option && typeof option === "object") {
    var startTime = +new Date();
    myChart.setOption(option, true);
    var endTime = +new Date();
    var updateTime = endTime - startTime;
    console.log("Time used:", updateTime);
}
}