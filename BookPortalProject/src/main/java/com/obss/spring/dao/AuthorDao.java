package com.obss.spring.dao;

import java.util.List;
import java.util.Map;

import com.obss.spring.bean.Author;

public interface AuthorDao {
	public Author addAuthor(Author author);

	public Author updateAuthor(Author author, int authorId);

	public void deleteAuthor(int authorId);

	public List<Map<String, Object>> getAuthor(String name, String surname);
	
	public List<Map<String,Object>> getAll();

}
