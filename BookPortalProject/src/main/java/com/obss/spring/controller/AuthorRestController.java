package com.obss.spring.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.obss.spring.bean.Author;
import com.obss.spring.services.AuthorService;

@Controller
@ResponseBody
@RequestMapping("/authors")
public class AuthorRestController {
	@Autowired
	private AuthorService authorService;

	@GetMapping
	public List<Map<String,Object>> getAll(){
		return authorService.getAll();
	}

	@GetMapping("/")
	public List<Map<String, Object>> getAuthor(@RequestParam (value= "name",required=false) String name,@RequestParam (value= "surname",required=false) String surname) {
		System.out.println("restAuthor");
		return authorService.getAuthor(name,surname);
	}

	@PostMapping("/")
	public Author addAuthor(@RequestBody Author author) {
		// save user
		return authorService.addAuthor(author);
	}

	@PutMapping("/{id}")
	public Author updateBook(@PathVariable int authorId, @RequestBody Author author) {
		// update user
		return authorService.updateAuthor(author, authorId);
	}

	@DeleteMapping("/{authorid}")
	public void deleteBook(@PathVariable int authorid) {
		authorService.deleteAuthor(authorid);
	}

}