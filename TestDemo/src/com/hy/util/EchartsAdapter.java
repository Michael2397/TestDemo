package com.hy.util;

import java.util.List;

public class EchartsAdapter {
	
	//title
	public String title(String province,String indicator){
		String titleFormal = "title: { text: '"+province+"近十年来"+indicator+"指标变化"+"', subtext: '数据来源国家统计局'}, ";
		return titleFormal;
	}
	
	//tooltip
	public String tooltip(){
		String tooltipFormal = " tooltip: {trigger: 'axis'}, ";
		return tooltipFormal;
	}
	
	//legend
	public String legend(String indicator){
		String legendFormal = "legend: {data:['"+indicator+"']}, ";
		return legendFormal;
	}
	
	//toolbox
   public String toolbox(){
	   String toolboxFormal = " toolbox: {show: true,feature: {dataZoom: {yAxisIndex: 'none'},dataView: {readOnly: false},magicType: {type: ['line', 'bar']},restore: {},saveAsImage: {} }}, ";
	   return toolboxFormal;
	   
   }
   
   //xAxis
   public String xAxix(){
	   String xAxixFormal = "xAxis:  {type: 'category',boundaryGap: false,data: ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014']}, ";
	   return xAxixFormal;
   }
   
   //yAxis
   public String yAxix(){
	   String yAxixFormal = " yAxis: {type: 'value'} ,";
	   return yAxixFormal;
   }
   
   //series
   public String series(List<String> results,String indicator){
	   //先把值拼成字符串
	   String strData = "";
	   for (int i = 0; i < results.size(); i++) {
		strData = strData + results.get(i)+" , ";
	   }	
	   strData = strData.substring(0, strData.length()-2);
	   //打印strData
	   System.out.println("strData："+strData);
	   
	   String series = "";
	   series = "series: [ { name:'"+indicator+"', type:'line', data:["+strData+"], markPoint: { data: [ "+
	   " {type: 'max', name: '最大值'}, {type: 'min', name: '最小值'} ]} } ]";
	   return series;
   }

}
