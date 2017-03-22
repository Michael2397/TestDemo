package com.hy.service;

import java.util.List;

public interface LoginService {
	/*boolean isLogin(String userName,String password) throws Exception;*/
	public List<String> getName() throws Exception;
	public List<String> getPassword() throws Exception;
	public boolean isPassed(String name,String password) throws Exception;
}
