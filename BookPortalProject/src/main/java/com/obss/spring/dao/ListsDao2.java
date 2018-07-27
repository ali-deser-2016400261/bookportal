package com.obss.spring.dao;

import java.util.List;

import com.obss.spring.bean.Book;
import com.obss.spring.bean.ReadList;


public interface ListsDao2 {
	public List<ReadList> addList(ReadList readlist);
	public List<Book> removeList(int userId, int bookId);
	public List<ReadList> showList(int userId);
	public void search(int userId, int bookId);
	
}
