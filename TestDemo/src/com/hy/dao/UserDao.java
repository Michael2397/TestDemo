package com.hy.dao;



import java.util.List;

import com.hy.entity.User;

public interface UserDao {
	/**
	 * 添加用户
	 *
	 */
	public void add(User user);
	/**
	 * 返回用户列表
	 * */
	public List<User> findUsers();

}
