package com.hy.action;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;







import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.hy.util.UserData;
import com.opensymphony.xwork2.ActionSupport;

public class RegAction extends ActionSupport {

	public String execute() throws Exception{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpServletResponse response = ServletActionContext.getResponse();
		//获取注册的用户名和密码
		String userName = request.getParameter("userName");
		String password = request.getParameter("password");
		System.out.println("user"+userName+"password"+password);
		
		//注册到数据库，先查看是否在数据库中存在，如果存在，则不能注册
		UserData userData = new UserData();
		if(userData.isReg(userName)){
			System.out.println("已经有相同账号，不能注册！");
			return INPUT;
		}else{
			String idcHql = "insert into user(username,password) VALUE('"+userName+"','"+password+"');";
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
	       int i = st.executeUpdate(idcHql);
	       System.out.println(i);
	    	System.out.println("注册成功");
			return SUCCESS;
		}
		
	
	}

}
