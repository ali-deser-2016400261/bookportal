package com.obss.spring.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.obss.spring.bean.Book;
import com.obss.spring.services.BookService;

@Controller
@ResponseBody
@RequestMapping("/books")
public class BookRestController {
	@Autowired
	private BookService bookService;

	@GetMapping
	public List<Map<String,Object>> getAll(){
		System.out.println("it worked?");
		return bookService.getAll();
	}

	@GetMapping("/")
	public List<Map<String, Object>> getBook(@RequestParam (value= "name",required=false) String name) {
		System.out.println("rest worked");
	
		return bookService.getBook(name);
	}
	
	

	@PostMapping
	public Book addBook(@RequestBody Book book) {
		// save user
		return bookService.addBook(book);
	}

	@PutMapping("/{id}")
	public Book updateBook(@PathVariable int bookId, @RequestBody Book book) {
		// update user
		return bookService.updateBook(book, bookId);
	}

	@DeleteMapping("{bookid}")
	public void deleteBook(@PathVariable int bookid) {
		bookService.deleteBook(bookid);
	}

}