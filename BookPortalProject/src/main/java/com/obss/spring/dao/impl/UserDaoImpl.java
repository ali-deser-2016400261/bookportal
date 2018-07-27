package com.obss.spring.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.obss.spring.bean.User;
import com.obss.spring.dao.UserDao;
import com.obss.spring.mapper.UserMapper;

@Repository
@Qualifier("userDao")
public class UserDaoImpl implements UserDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public User addUser(User user) {
		jdbcTemplate.update(
				"INSERT INTO user (name, surname, email,username,iduserrole,password) VALUES ( ?, ?, ?, ?, ?, ?)",
				 user.getName(), user.getSurname(), user.getEmail(), user.getUsername(), user.getiduserrole(),
				user.getPassword());
		System.out.println("User Added!!");
		return user;
	}

	public User editUser(User user, int userId) {
		jdbcTemplate.update(
				"UPDATE user SET name = ? , surname = ? , email = ? , username = ? , password = ? , iduserrole = ? WHERE iduser = ? ",
				user.getName(), user.getSurname(), user.getEmail(), user.getUsername(), user.getPassword(),
				user.getiduserrole(), userId);
		System.out.println("User Updated!!");
		return user;

	}

	public void deleteUser(int userId) {
		jdbcTemplate.update("DELETE from user WHERE iduser = ? ", userId);
		System.out.println("User Deleted!!");

	}

	public List<Map<String, Object>> getUser(String username) {
		System.out.println("user inside dao");
		if(username!=null) {
			System.out.println("username");
			return jdbcTemplate.queryForList("Select * from user where username like ?", "%" + username + "%" );
		}else {
			System.out.println("null");
			return null;
		}
	}
	
	public List<Map<String,Object>> getAll(){
		return jdbcTemplate.queryForList("Select * from user");
	}
	


}
