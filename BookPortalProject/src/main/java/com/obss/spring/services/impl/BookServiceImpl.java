package com.obss.spring.services.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.obss.spring.bean.Book;
import com.obss.spring.dao.BookDao;
import com.obss.spring.services.BookService;

@Service("bookService")
public class BookServiceImpl implements BookService {

	@Autowired
	BookDao bookDao;

	public Book addBook(Book book) {
		return bookDao.addBook(book);

	}

	public Book updateBook(Book book, int bookId) {
		return bookDao.updateBook(book, bookId);

	}

	public void deleteBook(int bookId) {
		bookDao.deleteBook(bookId);

	}

	public List<Map<String, Object>> getBook(String name) {
		System.out.println("service worked");
		return bookDao.getBook(name);
	}
	
	public List<Map<String,Object>> getAll(){
		
		return bookDao.getAll();
	}



}
