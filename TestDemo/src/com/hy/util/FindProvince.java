package com.hy.util;

public class FindProvince {
	public String findProvince(String province){
		String[] areas ={"北京","重庆","上海","天津","黑龙江","辽宁","吉林","河北","河南","湖北","湖南","山东","山西","陕西",
				"安徽","浙江","江苏","福建","广东","海南","四川","云南","贵州","青海","甘肃","江西","内蒙古","宁夏","新疆","西藏","广西"};
		//计数，用来寻找省份在第几个位置
		int count=0;
		String pro ="中国";
		for(int i=0;i<areas.length;i++){
			count++;
			//送过来的省份中包含数组的，则退出
			if(province.contains(areas[i])){
				break;
			}
			
		}
		pro=areas[count-1];
		return pro;
	}
}
