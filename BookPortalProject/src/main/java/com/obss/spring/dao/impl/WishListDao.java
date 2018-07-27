package com.obss.spring.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.obss.spring.bean.Book;
import com.obss.spring.bean.WishList;
import com.obss.spring.dao.ListsDao;
import com.obss.spring.mapper.WishListMapper;


@Repository
@Qualifier("wishListDao")
public class WishListDao implements ListsDao{
    @Autowired
    JdbcTemplate jdbcTemplate;
	public List<WishList> addList(WishList wishlist) {
		 jdbcTemplate.update("INSERT INTO userwishlist (userid, bookid) VALUES (?, ?)",
		            wishlist.getUserId(),wishlist.getBookId());
		        System.out.println("Book is Added into User's wishList");
				return null;
		
	}

	public List<Book> removeList(int userId, int bookId) {
		jdbcTemplate.update("DELETE from userwishlist (iduser, bookid) VALUES (?,?) ", userId);
        System.out.println("The book is Deleted from User's readList");
		return null;
	}

	public List<WishList> showList(int userId) {
		 List<WishList> persons =jdbcTemplate.query("SELECT * FROM userwishlist WHERE userid ='"+ userId+"'", new WishListMapper());
	        return persons;
		
	}

	public void search(int userId, int bookId) {
		// TODO Auto-generated method stub
		
	}

	
}
