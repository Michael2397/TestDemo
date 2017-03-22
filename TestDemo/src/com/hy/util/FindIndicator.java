package com.hy.util;

public class FindIndicator {
	public String findIndicator(String indicator){
		String ind[] = {"地区生产总值","第一产业增加值","第二产业增加值","街道办事处","城镇人口"};
		//计数，用来查找哪个符合要求
		int count = 0;
		//选中的指标
		String Indicator = "";
		for (int i = 0; i < ind.length; i++) {
			count++;
			if(indicator.contains(ind[i])){
				break;
			}
		}
		Indicator = ind[count-1];
		return Indicator;
	}
}
