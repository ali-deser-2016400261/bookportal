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

import com.obss.spring.bean.User;
import com.obss.spring.services.UserService;

@Controller
@ResponseBody
@RequestMapping("/user")
public class UserRestController {
	@Autowired
	private UserService userService;

	@GetMapping
	public  List<Map<String,Object>> geAll() {
	
	return userService.getAll();
	}

	@GetMapping("/")
	public List<Map<String, Object>> getUser(@RequestParam (value= "username",required=false) String username) {
	
		return userService.getUser(username);
		
	}

	@PostMapping
	public User addUser(@RequestBody User user) {
		// save user
		
		return userService.addUser(user);
	}

	@PutMapping("/{id}")
	public User updateUser(@PathVariable int userId, @RequestBody User user) {
		// update user
		return userService.updateUser(user, userId);
	}

	@DeleteMapping("/{userId}")
	public void deleteUser(@PathVariable int userId) {
		userService.deleteUser(userId);
	}

}
