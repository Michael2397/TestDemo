/**
 * 
 */
package com.hy.action;

import java.util.List;

import com.hy.util.EchartsAdapter;
import com.hy.util.FindData;
import com.hy.util.FindIndicator;
import com.hy.util.FindProvince;


/**
 * @author michael
 * Description: 
 *
 *直接在后台测试
 * 2017年3月21日
 */
public class Test {
	public static void main(String[] args) {
		FindProvince findProvince = new FindProvince();
		FindIndicator findIndicator = new FindIndicator();
		FindData findData = new FindData();
		EchartsAdapter echartsAdapter = new EchartsAdapter();
		String content = "安徽省地区生产总值";
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
				List<String> results = null;
				try {
					results = findData.getResult(Province, Indicator);
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
						+echartsAdapter.series(results,Indicator)+"};";
				
				//打印option对不对
				System.out.println("option:"+option);
	}
}
