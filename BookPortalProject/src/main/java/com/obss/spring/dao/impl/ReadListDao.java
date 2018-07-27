package com.obss.spring.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.obss.spring.bean.Book;
import com.obss.spring.bean.ReadList;
import com.obss.spring.dao.ListsDao2;
import com.obss.spring.mapper.ReadListMapper;


@Repository
@Qualifier("readListDao")
public class ReadListDao implements ListsDao2{
    @Autowired
    JdbcTemplate jdbcTemplate;
	public List<ReadList> addList(ReadList readlist) {
		 jdbcTemplate.update("INSERT INTO userreadlist (userid, bookid) VALUES (?, ?)",
		            readlist.getUserId(),readlist.getBookId());
		        System.out.println("Book is Added into User's readList");
				return null;
		
	}

	public List<Book> removeList(int userId, int bookId) {
		jdbcTemplate.update("DELETE from userreadlist (userid, bookid) VALUES (?,?) ", userId);
        System.out.println("The book is Deleted from User's readList");
		return null;
	}

	public List<ReadList> showList(int userId) {
		 List < ReadList > persons =jdbcTemplate.query("SELECT * FROM userreadlist WHERE userid ='"+ userId+"'", new ReadListMapper());
	        return persons;
		
	}

	public void search(int userId, int bookId) {
		// TODO Auto-generated method stub
		
	}

	
}
