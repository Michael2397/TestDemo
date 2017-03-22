package com.hy.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.hy.service.LoginService;
import com.hy.service.impl.LoginServiceImpl;
import com.hy.util.UserData;
import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport {
/*	UserData userData = new UserData();
	HttpServletRequest request = ServletActionContext.getRequest();
	HttpServletResponse response = ServletActionContext.getResponse();
	//从前端接受到的请求
	String name = request.getParameter("userName");
	String pass = request.getParameter("password");
	LoginService loginService = new LoginServiceImpl();*/
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private LoginService loginService;
	private String userName;
	private String password;

	public void setLoginService(LoginService loginService) {
		this.loginService = loginService;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String execute() throws Exception {
		/*System.out.println(name);*/
/*		if (userData.isPassed(name, pass)) {  //loginService.isLogin(userName, password)

			return SUCCESS;

		} else {

			return INPUT;
		}*/
		System.out.println("name"+userName);
		System.out.println("password"+password);
		if (loginService.isPassed(userName, password)) {  //loginService.isLogin(userName, password)

			return SUCCESS;

		} else {

			return INPUT;
		}
	}

}
