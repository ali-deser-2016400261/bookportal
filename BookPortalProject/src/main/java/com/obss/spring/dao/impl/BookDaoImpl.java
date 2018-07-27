package com.obss.spring.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import com.obss.spring.bean.Book;
import com.obss.spring.dao.BookDao;
import com.obss.spring.mapper.BookMapper;

@Repository
@Qualifier("bookDao")
public class BookDaoImpl implements BookDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public Book addBook(Book book) {
		jdbcTemplate.update("INSERT INTO books (name) VALUES (?)",  book.getName());
		System.out.println("Book Added!!");
		return book;
	}

	public Book updateBook(Book book, int bookId) {
		jdbcTemplate.update("UPDATE books SET name = ? WHERE bookid = ? ", book.getName(), bookId);
		System.out.println("Book Updated!!");
		return book;
	}

	public void deleteBook(int bookId) {
		jdbcTemplate.update("DELETE from books WHERE bookid = ? ", bookId);
		System.out.println("Book Deleted!!");

	}

	public List<Map<String, Object>> getBook(String name) {
		System.out.println("author inside dao");
		if(name!=null) {
			System.out.println("name");
			return jdbcTemplate.queryForList("Select * from books where name like ?", "%" + name + "%" );
		}else {
			System.out.println("null");
			return null;
		}
	}
	
	public List<Map<String,Object>> getAll(){
		return jdbcTemplate.queryForList("Select * from books");
	}
}
