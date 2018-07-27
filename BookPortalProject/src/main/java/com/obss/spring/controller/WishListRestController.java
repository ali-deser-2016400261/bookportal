package com.obss.spring.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.obss.spring.bean.Book;
import com.obss.spring.bean.WishList;
import com.obss.spring.services.impl.WishListServiceImpl;

@Controller
@ResponseBody
@RequestMapping("/wishlist")
public class WishListRestController {
	@Autowired
	private WishListServiceImpl wishListService;

	@GetMapping
	public List<Book> getBook() {
		List<Book> list = new ArrayList<Book>();
		Book book = new Book();
		book.setName("obss");
		list.add(book);
		return list;
	}

	@GetMapping("/{userId}")
	public List<WishList> getList(@PathVariable int userId) {
	
		return wishListService.showList(userId);
	}

	@PostMapping
	public List<WishList> addBook(@RequestBody WishList wishlist) {
		// save user
		return wishListService.addList(wishlist);
	}

//	@PutMapping("/{id}")
//	public Book updateBook(@PathVariable int bookId, @RequestBody Book book) {
//		// update user
//		return bookService.updateBook(book, bookId);
//	}

	@DeleteMapping("/{id}")
	public void deleteList(@PathVariable int userId, int bookId) {
		wishListService.removeList(userId,bookId);
	}

}