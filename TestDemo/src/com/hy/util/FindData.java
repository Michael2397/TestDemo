/**
 * 
 */
package com.hy.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;




/**
 * @author michael
 * Description: 
 *使用jdbc从数据库中获取数据
 *
 * 2017年3月21日
 */

public class FindData {


	public List<String> getResult(String province,String indicator) throws Exception{
		// 执行查询语句，结果是list类型
	   List<String> perYearIndicatorVals = new ArrayList<>();
		// sql语句,按照年份查出的值
		String idcHql = "select VALUE from DSTDATA where REGION='"
				+ province + "' and INDICATOR='" + indicator
				+ "' order by year ASC";
		System.out.println(idcHql);
		
		
		//注册数据库驱动
        Class.forName("com.mysql.jdbc.Driver");
        //建立数据库连接
        //参数一：jdbc：mysql//地址：端口/数据库,参数二：用户名，参数三：密码
        Connection conn = DriverManager.getConnection
                ("jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=utf-8","root","123456");
        //创建SQL语句
        Statement st = conn.createStatement();
        //执行语句，返回结果
        ResultSet rt = st.executeQuery(idcHql);
        while(rt.next()){
        	perYearIndicatorVals.add(rt.getString(1));
        }
        for (int i = 0; i < perYearIndicatorVals.size(); i++) {
			System.out.println("每年的数据：" + perYearIndicatorVals.get(i));
		}


		return perYearIndicatorVals;
	}
}
