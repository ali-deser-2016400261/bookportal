package com.obss.spring.services.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.obss.spring.bean.User;
import com.obss.spring.dao.UserDao;
import com.obss.spring.services.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao userDao;

	public User addUser(User user) {
		return userDao.addUser(user);

	}

	public User updateUser(User user, int userId) {
		return userDao.editUser(user, userId);

	}

	public void deleteUser(int userId) {
		userDao.deleteUser(userId);

	}

	public List<Map<String, Object>> getUser(String username) {
		return userDao.getUser(username);
	}
	
	public List<Map<String,Object>> getAll(){
		return userDao.getAll();
	}

}
