package com.hy.action;

import com.opensymphony.xwork2.ActionSupport;

public class TestAction extends ActionSupport {
	public String execute() throws Exception{
		System.out.println("struts===========");
		return "success";
	}
}
