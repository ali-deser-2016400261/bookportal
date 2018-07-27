package com.obss.spring.services;

import java.util.List;
import java.util.Map;

import com.obss.spring.bean.User;

public interface UserService {

	public User addUser(User user);

	public User updateUser(User user, int userId);

	public void deleteUser(int userId);

	public List<Map<String, Object>> getUser(String username);
	
	
	public List<Map<String,Object>> getAll();
	

}
