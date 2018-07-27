package com.obss.spring.bean;

public class ReadList {
	private int bookId;
	private int userId;

	public ReadList() {

	}

	public ReadList( int userId,int bookId) {
		this.bookId = bookId;
		this.userId = userId;
	}

	public int getBookId() {
		return bookId;
	}

	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	

}
