package com.obss.spring.controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.obss.spring.bean.User;

@Controller
@RequestMapping("/login")
public class LoginController {

	@GetMapping
	public ModelAndView getPage() {
		ModelAndView modelAndView = new ModelAndView("login");
		User user = new User();
		modelAndView.addObject("user", user);
		return modelAndView;
	}
	
	@PostMapping
	public String postPage(@Valid @ModelAttribute User user, BindingResult bindingResult) {
		if(bindingResult.hasErrors()) {
			return "login";
		}
		return null;
		
	}
}
