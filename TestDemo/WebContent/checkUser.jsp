
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
  Object username = session.getAttribute("username");
  if(null == username){
	  
	  response.sendRedirect("index.jsp");
  }
%>

