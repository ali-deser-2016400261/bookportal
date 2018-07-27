package com.obss.spring.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.obss.spring.bean.Book;
import com.obss.spring.bean.ReadList;
import com.obss.spring.dao.ListsDao2;
import com.obss.spring.services.ListsService2;

@Service("readListService")
public class ReadListServiceImpl implements ListsService2 {

	@Autowired
	ListsDao2 readListDao;

	@Override
	public List<ReadList> addList(ReadList readlist) {
		return readListDao.addList(readlist);
		
	}

	@Override
	public void removeList(int userId, int bookId) {
		readListDao.removeList(userId, bookId);
		
	}

	@Override
	public List<ReadList> showList(int userId) {
		return readListDao.showList(userId);
	}

	@Override
	public void search(int userId, int bookId) {
		// TODO Auto-generated method stub
		
	}

}
