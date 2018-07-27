package com.obss.spring.dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.obss.spring.bean.Author;
import com.obss.spring.dao.AuthorDao;

@Repository
@Qualifier("authorDao")
public class AuthorDaoImpl implements AuthorDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public Author addAuthor(Author author) {
		System.out.println("inside author add dao");
		jdbcTemplate.update("INSERT INTO authors (authorid, name, surname) VALUES (?, ?, ?)", author.getauthorid(),
				author.getName(), author.getSurname());
		System.out.println("Author Added!!");
		return author;

	}

	public Author updateAuthor(Author author, int authorId) {
		jdbcTemplate.update("UPDATE authors SET name = ? , surname = ? WHERE authorid = ? ", author.getName(),
				author.getSurname(), authorId);
		System.out.println("Author Updated!!");
		return author;

	}

	public void deleteAuthor(int authorId) {
		jdbcTemplate.update("DELETE from authors WHERE authorid = ? ", authorId);
		System.out.println("Author Deleted!!");

	}

//	public Author getAuthor(String name, String surname) {
//		Author author = (Author) jdbcTemplate.queryForObject("SELECT * FROM authors where authorid = ? ",
//				new Object[] { authorId }, new BeanPropertyRowMapper(Author.class));
//
//		return author;
//	}
	
	public List<Map<String, Object>> getAuthor(String name, String surname) {
		
		System.out.println("author inside dao");
		if(name!=null&&surname!=null) {
			System.out.println("both");
			return jdbcTemplate.queryForList("Select * from authors where name like ? and surname like ?", "%" + name +"%", "%" + surname + "%" );
		}else if(name!=null) {
			System.out.println("name");
			return jdbcTemplate.queryForList("Select * from authors where name like ?", "%" + name + "%" );
		}else if(surname!=null) {
			return jdbcTemplate.queryForList("Select * from authors where surname like ?", "%" + surname + "%" );
		}else {
			System.out.println("null");
			return null;
		}
}
	
	
	
	
	public List<Map<String,Object>> getAll(){
		return jdbcTemplate.queryForList("Select * from authors");
	}
}
