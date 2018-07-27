package com.obss.spring.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.obss.spring.bean.ReadList;

public class ReadListMapper implements RowMapper<ReadList>{

	@Override
	public ReadList mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		ReadList readlist = new ReadList();
		readlist.setUserId(rs.getInt("userid"));
		readlist.setBookId(rs.getInt("bookid"));

		return readlist;
	}

}
