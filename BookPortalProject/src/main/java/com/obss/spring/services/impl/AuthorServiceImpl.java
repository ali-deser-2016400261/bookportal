package com.obss.spring.services.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.obss.spring.bean.Author;
import com.obss.spring.dao.AuthorDao;
import com.obss.spring.services.AuthorService;

@Service("authorService")
public class AuthorServiceImpl implements AuthorService {

	@Autowired
	AuthorDao authorDao;

	public Author addAuthor(Author author) {
		return authorDao.addAuthor(author);

	}

	public Author updateAuthor(Author author, int authorId) {
		return authorDao.updateAuthor(author, authorId);

	}

	public void deleteAuthor(int authorId) {
		authorDao.deleteAuthor(authorId);

	}

	public List<Map<String, Object>> getAuthor(String name,String surname) {
		return authorDao.getAuthor(name,surname);
	}

	
	public List<Map<String,Object>> getAll(){
		return authorDao.getAll();
	}
}
