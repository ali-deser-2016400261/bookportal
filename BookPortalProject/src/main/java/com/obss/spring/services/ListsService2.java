package com.obss.spring.services;

import java.util.List;

import com.obss.spring.bean.ReadList;

public interface ListsService2 {
	public List<ReadList> addList(ReadList readlist);
	public void removeList(int userId, int bookId);
	public List<ReadList> showList(int userId);
	public void search(int userId, int bookId);
	
}

