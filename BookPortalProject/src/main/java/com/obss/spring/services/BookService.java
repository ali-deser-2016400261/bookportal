package com.obss.spring.services;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestParam;

import com.obss.spring.bean.Book;

public interface BookService {

	public Book addBook(Book book);

	public Book updateBook(Book book, int bookId);

	public void deleteBook(int bookId);

	public List<Map<String, Object>> getBook(String name);
	
	public List<Map<String,Object>> getAll();

}
