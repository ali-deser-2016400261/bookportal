package com.obss.spring.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.obss.spring.bean.Book;
import com.obss.spring.bean.WishList;
import com.obss.spring.dao.ListsDao;
import com.obss.spring.services.ListsService;

@Service("wishListService")
public class WishListServiceImpl implements ListsService {

	@Autowired
	ListsDao wishListDao;

	@Override
	public List<WishList> addList(WishList wishlist) {
		return wishListDao.addList(wishlist);
		
	}

	@Override
	public void removeList(int userId, int bookId) {
		wishListDao.removeList(userId, bookId);
		
	}

	@Override
	public List<WishList> showList(int userId) {
		return wishListDao.showList(userId);
	}

	@Override
	public void search(int userId, int bookId) {
		// TODO Auto-generated method stub
		
	}

}
