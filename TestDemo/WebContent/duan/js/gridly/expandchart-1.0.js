Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

Number.prototype.Integer=function(rst){
	return Math[rst<0?'ceil':'floor'](rst);
}

function ExpandChart(cfg){
	this.url=cfg.url||cfg.URL;//请求地址
	this.data=cfg.data;//请求的参数
	this.option=cfg.option;//echart初始配置项
	this.containerDiv=cfg.containerDiv;//用于生成echart的div的id
	this.container=null;//用于生成echart的div
	this.draggbleCls='gridly';
	this.chart=null;//echart对象
	this.loadtypes=["echarts"];//生成echart时加载的图表类型
	this.chartDivNO=0;
	this.init();
	this.createDraggable();
};

ExpandChart.prototype.init=function(){
	this.container=document.getElementById(this.containerDiv);
}

ExpandChart.prototype.attr=function(element,name,val){
	if(val===undefined){
		return element.getAttribute(name);
	}else{
		//如果name=‘class’
		name==='class'?(element.className=val):element.setAttribute(name,val);
	}
};

ExpandChart.prototype.setClass=function(element,cname){
	this.attr(element,'class',cname);
};

ExpandChart.prototype.show=function(){
	//var chartDivDom=document.getElementById(this.containerDiv);
	if(!this.container){
		this.container=document.getElementById(this.containerDiv);
	}
	this.container.style.visibility='visible';
};

ExpandChart.prototype.hide=function(){
	//var chartDivDom=document.getElementById(this.containerDiv);
	if(!this.container){
		this.container=document.getElementById(this.containerDiv);
	}
	this.container.style.visibility='hidden';
};

//增加区域，并在当前区域构造echart和实现拖动效果
ExpandChart.prototype.createArea=function(){
	
	_this=this;
	option=this.option;
	
	$.ajax({
		type:'post',
		url:this.url,
		data:this.data,
		dataType:'json',
		success:function(result){
			
			_this.configOption(result[0]);
			_this.initChart();
			//document.writeln(JSON.stringify(_this.option));
			//document.writeln(JSON.stringify(_this.chart.option));
			//_this.chart.option=_this.option;
			//alert(_this.option.title.text);
			//alert(_this.option.title.text);
			_this.chart.setOption(_this.option);
		},
		error:function(mess){
			_this.initChart();
			_this.chart.setOption(_this.option);
		}
	});
	
};

ExpandChart.prototype.createAreaDiv=function(){
	var _this=this;
	var areaDiv;
	if(!this.container){
		this.container=document.getElementById(this.containerDiv);
	}
	return (function(){
		var areaDivID,chartElm,delElm;
		//构造拖动用的div，包含生成的echart图表和删除图标
		areaDiv=document.createElement('div');
		areaDivID='myGridly_'+_this.chartDivNO;
		_this.attr(areaDiv,'id',areaDivID);
		_this.attr(areaDiv,'class','brick small');
		_this.container.appendChild(areaDiv);
		
		chartElm=document.createElement('div');
		_this.attr(chartElm,'id','myChart_'+_this.chartDivNO++);
		chartElm.style.cssText="width:100%;height:430px;";
		areaDiv.appendChild(chartElm);
		
		//构造删除用的div
		delElm=document.createElement('div');
		delElm.className='delete';
		delElm.innerHTML='x';
		areaDiv.appendChild(delElm);
		
		$('.gridly').gridly()
		return chartElm;
	}());
}

//利用gridly构造拖动效果
ExpandChart.prototype.createDraggable=function(){
	_this=this;
	var base,gutter,columns;//px
	var width=window.document.body.offsetWidth;//当前页面宽度
	alert(width);
	base=60;
	gutter=5;
	columns=(width+gutter)/(base+gutter);//columns的计算方法
	columns=columns.Integer();//取整
	$('.'+this.draggbleCls).gridly({
		base:base,
		gutter:gutter,
		columns:columns,
		draggable: {
			zIndex: 800,
			selector: '> *'
		  }
	});
	//绑定事件，用于删除区域
	$(document).on("click", ".gridly .delete", function(event) {
      var $this;
      event.preventDefault();
      event.stopPropagation();
      $this = $(this);
      $this.closest('.brick').remove();
      return $('.gridly').gridly('layout');
    });
};

//配置echart的series.data等必要的参数
ExpandChart.prototype.configOption=function(result){
	_this=this;
	option=this.option;
	
	//处理请求结果
	for(var k=0;k<result.type.length;k++){
		_this.loadtypes.push('echarts/chart/'+result.type[k]);
	}
	option.toolbox.feature.magicType.type=result.type;
	option.legend.data=result.legend;
	option.title.text=result.title;
	option.xAxis.data=result.xdata;
	
	//构造option的series
	var i=0;
	var ydata=result.ydata
	for(var item in ydata){
		if(result.legend.indexOf(ydata[item].name)!==-1){
			//for(var j=0;j<ydata[item].length;++j){
			//	if(option.series[i+j]){
			//		option.series[i+j]={name:'',data:[]};
			//	}
			//	option.series[i+j].name=item;
			//	option.series[i+j].data=ydata[item][j];
			//}
			//i+=j;
			option.series[i]=ydata[item];
			++i;
		}else{
			continue;
		}
	}
	//_this.chart=_this.initChart();
	//_this.chart.setOption(_this.option);
};

//初始化echart，加载相应的图表类型
ExpandChart.prototype.initChart=function(){
	var _this=this;
	//构造echart
	require(
		_this.loadtypes,
		function(ec){
			_this.chart = ec.init(_this.createAreaDiv());
			alert(_this.loadtypes);
		}
	);
}





