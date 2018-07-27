package com.obss.spring.dao;

import java.util.List;
import java.util.Map;

import com.obss.spring.bean.User;

public interface UserDao {
	public User addUser(User user);

	public User editUser(User user, int userId);

	public void deleteUser(int userId);

	
	public List<Map<String,Object>> getAll();

		public List<Map<String, Object>> getUser(String username);
}
