package com.hy.service;

import java.util.List;

import com.hy.entity.User;

public interface UserService {
	/**
	 * 添加用户
	 * */
	public void add(User user);
	/***
	 * 返回用户列表
	 * */
	public List<User> findUsers();

}
