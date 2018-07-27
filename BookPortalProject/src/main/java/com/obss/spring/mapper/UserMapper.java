package com.obss.spring.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.obss.spring.bean.User;

public class UserMapper implements RowMapper<User>{

	@Override
	public User mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		User user = new User();
		user.setUserId(rs.getInt("iduser"));
		user.setUsername(rs.getString("username"));
		user.setSurname(rs.getString("surname"));
		user.setEmail(rs.getString("email"));
		user.setPassword(rs.getString("password"));
		user.setiduserrole(rs.getInt("iduserrole"));
		user.setName(rs.getString("name"));
		return user;
	}

}
