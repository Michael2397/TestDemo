/**
 * 
 */
package com.hy.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 * @author michael
 * Description: 
 *
 *
 * 2017年3月22日
 */
public class UserData {
	
	//得到数据库中的用户名列表
	public List<String> getName() throws Exception{
		String idcHql = "select username from user ;";
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
        List<String> nameList = new ArrayList<>();
        while(rt.next()){
        	nameList.add(rt.getString(1));
        }
        return nameList;
	}
	//得到数据库中的密码列表
	public List<String> getPassword() throws Exception{
		String idcHql = "select password from user ;";
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
        List<String> passList = new ArrayList<>();
        while(rt.next()){
        	passList.add(rt.getString(1));
        }
        return passList;
	}
	//判断用户是否有权限登录
	public boolean isPassed(String name,String password) throws Exception{
		boolean nameBoolean = false;
		boolean passBoolean = false;
		List<String> nameList = getName();
		List<String> passList = getPassword();
		for (int i = 0; i < nameList.size(); i++) {
			if(name.equals(nameList.get(i))){
				nameBoolean = true;
			}
		}	
		for (int i = 0; i < passList.size(); i++) {
			if(name.equals(passList.get(i))){
				passBoolean = true;
			}
		}
		if(nameBoolean==true&&passBoolean==true){
			return true;
		}
		else{
			return false;
		}
	}
	public boolean isReg(String name) throws Exception{
		boolean nameBoolean = false;
		List<String> nameList = getName();

		for (int i = 0; i < nameList.size(); i++) {
			if(name.equals(nameList.get(i))){
				nameBoolean = true;
			}
		}	
		if(nameBoolean==true){
			return true;
		}
		else{
			return false;
		}
	}
}
