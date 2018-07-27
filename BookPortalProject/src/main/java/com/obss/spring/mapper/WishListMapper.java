package com.obss.spring.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.obss.spring.bean.WishList;

public class WishListMapper implements RowMapper<WishList>{

	@Override
	public WishList mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		WishList wishlist = new WishList();
		wishlist.setUserId(rs.getInt("userid"));
		wishlist.setBookId(rs.getInt("bookid"));

		return wishlist;
	}

}
