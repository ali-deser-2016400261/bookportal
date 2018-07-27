package com.obss.spring.services;

import java.util.List;

import com.obss.spring.bean.Book;
import com.obss.spring.bean.WishList;

public interface ListsService {
	public List<WishList> addList(WishList wishlist);
	public void removeList(int userId, int bookId);
	public List<WishList> showList(int userId);
	public void search(int userId, int bookId);
	
}

