
//全国近年国民经济指标 otherNationalEconomicIndicators
function GetNationalEconomicIndicators(){
	var selectVal=document.getElementById('indicatorsInput').value;
	if(selectVal!=indicatorsInputVal)
	{
		indicatorsInputVal=selectVal;
		//初始化国民经济行业图的宏观指标选择下拉框
		var indicatorArray=selectVal.split(",");
		document.getElementById("nationidr_indicator").options.length=0;
		for (var i = 0; i < indicatorArray.length; i++) {
			var nationidr_indicator_options=document.getElementById("nationidr_indicator").options;
			nationidr_indicator_options.add(new Option(indicatorArray[i]));
		}
		
		var myChart1,option1,selectedval="";
		var selectvalue=selectVal.split(",");
		var indexFlag=0;
		for(var i=0;i<selectvalue.length;i++)
		{
			if(selectvalue[i]!="")
			{
				if(indexFlag==0)
				{
					selectedval+=indicators[selectvalue[i]];
					indexFlag=indexFlag+1;
				}
				else
					selectedval+=","+indicators[selectvalue[i]];
			}
		}
		 require(
		            [
		                'echarts',
		                'echarts/chart/line',   // 按需加载所需图表，如需动态类型切换功能，别忘了同时加载相应图表
		                'echarts/chart/bar'
		            ],
		            function (ec) {
		               myChart1 = ec.init(document.getElementById('nationalEconomicIndicators'));
		                
		                option1 = {
		                	    title : {
		                	        text: '全国近年国民经济指标数据',
		                	        x: 'center',
		                	        y: 'bottom'
		                	    },
		                	    tooltip : {
		                	        trigger: 'axis'
		                	    },
		                	    legend: {
		                	    	x: 'center',
		                	        y: 'top',
		                	        data:[]
		                	    },
		                	    toolbox: {
		                	        show : true,
		                	        orient: 'vertical',
		                	        x: 'right',
		                	        y: 'center',
		                	        feature : {
		                	            mark : {show: false},
		                	            dataView : {show: true, readOnly: false},
		                	            magicType : {show: true, type: ['line', 'bar']},
		                	            restore : {show: true},
		                	            saveAsImage : {show: true}
		                	        }
		                	    },
		                	    calculable : true,
		                	    xAxis : [{
		                	            	 type: 'category',
		                	            	 data:[]
		                	             }],
		                	    yAxis : [
		                	        {
		                	            type : 'value'
		                	        }
		                	    ],
		                	    series :[{}]
		                	};
		            }
		        );
		$.ajax({
			type:"post",
			data:{indicators:selectedval,type:2},
			url:"common!getNationalEconomicIndicators.action",
			dataType:"json",
			success:function(result){
				var seriesData=[];
				for(var i=1;i<result.length;i++){
					seriesData.push({
						'name':selectvalue[i-1],
						'type':'bar',
						'data':result[i]
						});
				}
				option1.legend.data=selectvalue;
				option1.xAxis[0].data=result[0];
				option1.series=seriesData;
				myChart1.setOption(option1);
				
			},
			error:function(){
				option1.legend.data=[''];
				option1.xAxis[0].data=[''];
				myChart1.setOption(option1);
			}
		});
	}
}

//全国近年其他国民经济指标 otherNationalEconomicIndicators
function GetOtherNationalEconomicIndicators(){
	var selectVal=document.getElementById('otherIndicatorsInput').value;
	if(selectVal!=otherIndicatorsInputVal)
	{
		otherIndicatorsInputVal=selectVal;
		
		var myChart1,option1,selectedval="";
		var selectvalue=selectVal.split(",");
		var indexFlag=0;
		for(var i=0;i<selectvalue.length;i++){
			if(selectvalue[i]!=""){
				if(indexFlag==0){
					selectedval+=indicators[selectvalue[i]];
					indexFlag=indexFlag+1;
				}
				else{
					selectedval+=","+indicators[selectvalue[i]];
				}
			}
		}
		 require(
		            [
		                'echarts',
		                'echarts/chart/line',   // 按需加载所需图表，如需动态类型切换功能，别忘了同时加载相应图表
		                'echarts/chart/bar'
		            ],
		            function (ec) {
		               myChart1 = ec.init(document.getElementById('otherNationalEconomicIndicators'));
		                
		                option1 = {
		                	    title : {
		                	        text: '全国近年其它经济指标数据',
		                	        x: 'center',
		                	        y: 'bottom'
		                	    },
		                	    tooltip : {
		                	        trigger: 'axis'
		                	    },
		                	    legend: {
		                	    	x: 'center',
		                	        y: 'top',
		                	        data:[]
		                	    },
		                	    toolbox: {
		                	        show : true,
		                	        orient: 'vertical',
		                	        x: 'right',
		                	        y: 'center',
		                	        feature : {
		                	            mark : {show: false},
		                	            dataView : {show: true, readOnly: false},
		                	            magicType : {show: true, type: ['line']},
		                	            restore : {show: true},
		                	            saveAsImage : {show: true}
		                	        }
		                	    },
		                	    calculable : true,
		                	    xAxis : [{
		                	            	 type: 'category',
		                	            	 data:[]
		                	             }],
		                	    yAxis : [
		                	        {
		                	            type : 'value'
		                	        }
		                	    ],
		                	    series :[{}]
		                	};
		            }
		        );
		$.ajax({
			type:"post",
			data:{indicators:selectedval,type:2},
			url:"common!getOtherNationalEconomicIndicators.action",
			dataType:"json",
			success:function(result){
				var seriesData=[];
				for(var i=1;i<result.length;i++){
					seriesData.push({
						'name':selectvalue[i-1],
						'type':'line',
						'data':result[i]
						});
				}
				option1.legend.data=selectvalue;
				option1.xAxis[0].data=result[0];
				option1.series=seriesData;
				myChart1.setOption(option1);
				
			},
			error:function(){
				option1.legend.data=[''];
				option1.xAxis[0].data=[''];
				myChart1.setOption(option1);
			}
		});
	}
}

//各个地区的指标数据地区和单个指标
function GetRegionalEconomicIndicators()
{
	if(selectCity=='china'){
		condition="g.year="+"'"+selectedYear2+"'"+" and g.id="+"'"+selectedTarget2+"'"+" and g.value is not null and g.regionCode=r.regionCode and r.regionDegree='1'";
	}
	else{
		//condition=" g.id='2_1_1'and g.year='2014' and g.regionCode in (select r.regionCode from r where r.preRegion in (select r.regionCode from r where r.regionName like '辽宁%' and rownum<2))";
		//condition="g.year="+"'"+selectedYear2+"'"+" and g.id="+"'"+selectedTarget2+"'"+" and g.value is not null and g.regionCode=r.regionCode and r.regionDegree='1'";
		condition="g.id='"+selectedTarget2+"' and g.year='"+selectedYear2+"' and g.regionCode=r.regionCode and r.preRegion in (select re.regionCode from RegionBase as re where re.regionName like '"+mt+"%')";
		}
	$.ajax({
		type: "post",
		url: "common!readData.action",
		dataType:'json',
		data:{
			 "entity": selectedEntity,//必填
             "condition": condition,  //第一次列出来数据的条件
             "searchColumn":"select g.id,r.regionName,g.year,g.value",//以“,”分割，可不填。对哪几列模糊查询
		},
		 serverSide: true, 
		success:function(result){
			//console.log("resultData:"+result);
			jsondata = result;
			$('#regionalEconomicIndicators').DataTable({
	            "pagingType":   "full_numbers",
	            "paging":false,
				"searching": false,
				"scrollY": 300,
				"bJQueryUI":true,
	            "language":  { "decimal":",",  
	            	"thousands":".", 
	            	"sProcessing":"加载中...", 
	            	"sLengthMenu":"显示_MENU_项结果",
	            	"sZeroRecords":"没有匹配结果",
	            	"sInfo":"显示第_START_至_END_项结果，共_TOTAL_项",
	            	"sInfoEmpty":"显示第0至0项结果，共0项",
	            	"sInfoFiltered":"(由_MAX_项结果过滤)",
	            	"sInfoPostFix":"",
	            	"sSearch":"搜索:",
	            	"sUrl":"",
	            	"sEmptyTable":"表中数据为空",
	            	"sLoadingRecords":"载入中...",
	            	"sInfoThousands":",",
	            	"oPaginate":{ "sFirst":"首页","sPrevious":"上页","sNext":"下页","sLast":"末页"}, 
	            	"oAria":{ "sSortAscending":":以升序排列此列","sSortDescending":":以降序排列此列"}},
	            "dom": "<'row'<'col-xs-2'l><'#mytool.col-xs-4'><'col-xs-6'f>r>" +   //dom定位，即分页搜索功能位置
	                    "t" +
	                    "<'row'<'col-xs-6'i><'col-xs-6'p>>",

	            data:jsondata,
	            columns: [
						  {data: [1]},
	                      {data: [2]},		                     
	                      {data: [3]},		                      
	            ],
	            "error":function(mess){
	            	alert(mess);
	            }
	        });
		},
		error: function(errorMsg){
			alert("error...");
		}
		
	}); 
}

//所在地区的各个企业的数据--选择行业时触发
function GetRegionalIndustriesIndicators_ForClick(area,indistries){
	var selectVal=document.getElementById('idrCheckboxSelect').value;
	if(selectVal!=industiesVal){
		industiesVal=selectVal;
		$('#regionalIndustriesIndicators').dataTable().fnDestroy(); 
		GetRegionalIndustriesIndicators(area,indistries);
		
		GetRegionalIndustriesRelations(area,indistries);
	}
}

//所在地区的各个企业的数据,界面初始化时加载，初始化datatable
function GetRegionalIndustriesIndicators(area,indistries)
{
	var selectArea=areaMapData[area];
	$.ajax({
		type: "post",
		url: "common!getRegionalIndustriesIndicators.action",
		dataType:'json',
		data:{
			"area":selectArea,
			"indistries":indistries
		},
		serverSide: true, 
		success:function(result){
			$('#regionalIndustriesIndicators').DataTable({
	            "pagingType":   "full_numbers",
	            "paging":false,
				"searching": false,
				"scrollY": 300,
				"scrollX": "50%",
				"columnDefs": [
	                  {
	                    "targets": [ 0 ],
						"className":"align-center"
	                  },
	                  {
	                    "targets": [1 ],
	                    "width":"25%"
	                  },
	                  {
	                    "targets": [2],
	                    "className":"align-center"
	                  }
	                ],
	            "language":  { "decimal":",",  
	            	"thousands":".", 
	            	"sProcessing":"加载中...", 
	            	"sLengthMenu":"显示_MENU_项结果",
	            	"sZeroRecords":"没有匹配结果",
	            	"sInfo":"显示第_START_至_END_项结果，共_TOTAL_项",
	            	"sInfoEmpty":"显示第0至0项结果，共0项",
	            	"sInfoFiltered":"(由_MAX_项结果过滤)",
	            	"sInfoPostFix":"",
	            	"sSearch":"搜索:",
	            	"sUrl":"",
	            	"sEmptyTable":"表中数据为空",
	            	"sLoadingRecords":"载入中...",
	            	"sInfoThousands":",",
	            	"oPaginate":{ "sFirst":"首页","sPrevious":"上页","sNext":"下页","sLast":"末页"}, 
	            	"oAria":{ "sSortAscending":":以升序排列此列","sSortDescending":":以降序排列此列"}},
	            "dom": "<'row'<'col-xs-2'l><'#mytool.col-xs-4'><'col-xs-6'f>r>" +   //dom定位，即分页搜索功能位置
	                    "t" +
	                    "<'row'<'col-xs-6'i><'col-xs-6'p>>",

	            data:result,
	            "error":function(mess){
	            	alert(mess);
	            }
	            /*columns: [
						  {data:"companyCode"},
	                      {data:"companyCHName"},		                     
	                      {data:"industryClass"},		                      
	            ]*/
	        });
		},
		error: function(errorMsg){
			alert("error："+errorMsg);
		}
		
	}); 
}

//区域-行业指标关联视图    多指标
function GetRegionalIndustriesRelations(area,Industries)
{
	var selectProvince=provincesMapData[area];
	//alert("Industries:"+Industries);
    var myChart1,option1;
	 require(
	            [
	                'echarts',
	                'echarts/chart/line',   // 按需加载所需图表，如需动态类型切换功能，别忘了同时加载相应图表
	                'echarts/chart/bar'
	            ],
	            function (ec) {
	            	myChart1 = ec.init(document.getElementById('regionalIndustriesRelations'));
	            	
	            	option1 = {
	                 	    title : {
	                 	        text: area+'近年行业净利润额',
	                 	        x: 'center',
	                 	        y: 'bottom'
	                 	    },
	                 	    tooltip : {
	                 	        trigger: 'axis'
	                 	    },
	                 	    legend: {
	                 	    	x: 'center',
	                 	        y: 'top',
	                 	        data:[]
	                 	    },
	                 	    toolbox: {
	                 	        show : true,
	                 	        orient: 'vertical',
	                 	        x: 'right',
	                 	        y: 'center',
	                 	        feature : {
	                 	            mark : {show: false},
	                 	            dataView : {show: true, readOnly: false},
	                 	            magicType : {show: true, type: ['line', 'bar']},
	                 	            restore : {show: true},
	                 	            saveAsImage : {show: true}
	                 	        }
	                 	    },
	                 	    calculable : true,
	                 	    xAxis : [{
	                 	            	 type: 'category',
	                 	            	 data:[]
	                 	             }],
	                 	    yAxis : [
	                 	        {
	                 	            type : 'value'
	                 	        }
	                 	    ],
	                 	    series :[{}]
	                 	};
	            }
	        );
	 
	 $.ajax({
			type:"post",
			data:{Industries:Industries,area:selectProvince},
			url:"common!GetRegionalIndustriesRelations.action",
			dataType:"json",
			success:function(result){
				var names=Industries.split(",");
				var seriesData=[];
				for(var i=1;i<result.length;i++){
					seriesData.push({
						'name':names[i-1],
						'type':'bar',
						'data':result[i]
						});
				}
				option1.legend.data=names;
				option1.xAxis[0].data=result[0];
				option1.series=seriesData;
				myChart1.setOption(option1);
			},
			error:function(){
				option1.legend.data=[''];
				option1.xAxis[0].data=[''];
				myChart1.setOption(option1);
			}
		});
}

//宏观-行业指标关联视图    多指标
function GetNationalIndustriesRelations(indicator,industry)
{
	indicatorval=indicators[indicator];
	industryval=allIndustriesMapData[industry];
	if(Indicator==undefined || Industry==undefined){
		return;
	}
	
	//区域-企业指标关联视图
    require(
            [
                'echarts',
                'echarts/chart/scatter'
            ],
            function (ec) {
                myChart3 = ec.init(document.getElementById('NationalIndustriesRelations'));
                option3 = {
                	    title : {
                	        text: '国民经济宏观指标-行业利润额关联视图',
                	        x: 'center',
                	        y: 'bottom'
                	    },
                	    tooltip : {
                	        trigger: 'axis',
                	        showDelay : 0,
                	        formatter : function (params) {
                	            if (params.value.length > 1) {
                	                return params.value[0] + '万元 ' //params.seriesName + ' :<br/>'
                	                   + params.value[1] + '万元';
                	            }
                	            else {
                	                return params.name + ' : '//params.seriesName + ' :<br/>'
                	                   + params.value + '万元';
                	            }
                	        },  
                	        axisPointer:{
                	            show: true,
                	            type : 'cross',
                	            lineStyle: {
                	                type : 'dashed',
                	                width : 1
                	            }
                	        }
                	    },
                	    legend: {
                	        data:[],
                	        x: 'center',
                	        y: 'top',
                	    },
                	    toolbox: {
                	        show : true,
                	        orient: 'vertical',
                	        x: 'right',
                	        y: 'center',
                	        feature : {
                	            mark : {show: true},
                	            dataZoom : {show: true},
                	            dataView : {show: true, readOnly: false},
                	            restore : {show: true},
                	            saveAsImage : {show: true}
                	        }
                	    },
                	    xAxis : [
                	        {
                	            type : 'value',
                	            scale:true,
                	            axisLabel : {
                	                formatter: '{value}'
                	            }
                	        }
                	    ],
                	    yAxis : [
                	        {
                	            type : 'value',
                	            scale:true,
                	            axisLabel : {
                	                formatter: '{value}'
                	            }
                	        }
                	    ],
                	    series : [{}]
                	};
            }   
        );
    
	$.ajax({
		type:"post",
		data:{indicator: indicatorval,industry: industryval},
		url:"common!GetNationalIndustriesRelations.action",
		dataType:"json",
		success:function(result){
			var series=[];
			var seriesData=[];
			for(var i=0;i<result[1].length;i++){
				var temp=[];
				temp.push([result[1][i]]);
				temp.push([result[2][i]]);
				seriesData.push(temp);
			}
			series.push({
				"name":indicator+"-"+industry,
				"type":"scatter",
				"data":seriesData
			});
			option3.legend.data=[indicator+"-"+industry];
			option3.series=series;
			myChart3.setOption(option3);
		},
		error:function(){
			option3.legend.data=[''];
			option3.xAxis[0].data=[''];
			myChart3.setOption(option1);
		}
	});
}

