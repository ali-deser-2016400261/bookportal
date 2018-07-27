package com.obss.spring.dao;

import java.util.List;

import com.obss.spring.bean.Book;
import com.obss.spring.bean.WishList;


public interface ListsDao {
	public List<WishList> addList(WishList wishlist);
	public List<Book> removeList(int userId, int bookId);
	public List<WishList> showList(int userId);
	public void search(int userId, int bookId);
	
}
