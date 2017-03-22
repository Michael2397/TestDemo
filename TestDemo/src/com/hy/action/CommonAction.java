package com.hy.action;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.hy.util.EchartsAdapter;
import com.hy.util.FindData;
import com.hy.util.FindIndicator;
import com.hy.util.FindProvince;

public class CommonAction {
	public void Request() throws Exception{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpServletResponse response = ServletActionContext.getResponse();
		//从前端接受到的请求
		String content = request.getParameter("content");
		System.out.println(content);
		FindProvince findProvince = new FindProvince();
		FindIndicator findIndicator = new FindIndicator();
		FindData findData = new FindData();
		EchartsAdapter echartsAdapter = new EchartsAdapter();
		System.out.println(content);
		//获取省份和指标
		String Province = findProvince.findProvince(content);
		String Indicator = findIndicator.findIndicator(content);
		
		//如果获取的省份是重庆，北京，上海，天津，则需要在后面加上“市”，其他加省
		if(Province.equals("重庆")||Province.equals("北京")||Province.equals("上海")||Province.equals("天津")){
			Province = Province+"市";
		}else{
			Province = Province + "省";
		}
		
		//获取List<String> results数据，直方图
		List<String> resultss = null;
		try {
			resultss = findData.getResult(Province, Indicator);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//将results整合成echarts格式
		String option = "option = {"+echartsAdapter.title(Province, Indicator)
				+echartsAdapter.tooltip()
				+echartsAdapter.legend(Indicator)
				+echartsAdapter.toolbox()
				+echartsAdapter.xAxix()
				+echartsAdapter.yAxix()
				+echartsAdapter.series(resultss,Indicator)+"}";
		
		//打印option对不对
		System.out.println("option:"+option);
		String results = option;
		response.setCharacterEncoding("UTF-8");
	    response.getWriter().write(results);  
		
	}
	public void Test(){
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpServletResponse response = ServletActionContext.getResponse();
		//从前端接受到的请求
		String content = request.getParameter("content");
		System.out.println(content);
	}
}
