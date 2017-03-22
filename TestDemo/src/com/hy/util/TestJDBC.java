/**
 * 
 */
package com.hy.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * @author michael
 * Description: 
 *
 *
 * 2017年3月21日
 */
public class TestJDBC {
	public static void main(String[] args) {
		 String url = "jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=utf-8";
	     String user = "root";
	     String pwd = "123456";
	  /* String sql = "select V from hyData where Y='2014' ";*/
	    /* String sql = "select username from user where password = '123456'";*/
	    /* String sql = "select VALUE from dstData where  REGION like ' %北京市  %' ";*/
	     String sql = "select VALUE from dstData where  REGION = '北京市'  ";
	    /* String sql = "select VALUE from hyData where  YEAR = '2013'  ";*/
	     Connection conn = null;
	     Statement st = null;
	     ResultSet rs = null;
	     try {
	         Class.forName("com.mysql.jdbc.Driver");
	         conn = DriverManager.getConnection(url,user,pwd);
	         st = conn.createStatement();
	         //执行查询语句，另外也可以用execute()，代表执行任何SQL语句
	         rs = st.executeQuery(sql);
	         while(rs.next()) {
	             System.out.println(rs.getObject(1) + "  " );
	         }
	     //分别捕获异常
	     } catch (ClassNotFoundException e) {
	         e.printStackTrace();
	     } catch (SQLException e) {
	         e.printStackTrace();
	     } finally {
	         try {
	             //判断资源是否存在
	             if(rs != null) {
	                 rs.close();
	                 //显示的设置为空，提示gc回收
	                 rs = null;
	             }
	             if(st != null) {
	                 st.close();
	                 st = null;
	             }
	             if(conn != null) {
	                 conn.close();
	                 conn = null;
	             }
	         } catch (SQLException e) {
	             e.printStackTrace();
	         }    
	     }
	}

}
