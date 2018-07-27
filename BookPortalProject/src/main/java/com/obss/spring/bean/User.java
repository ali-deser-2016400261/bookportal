package com.obss.spring.bean;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class User {

	@NotNull
	private int iduser;

	@NotNull
	private String name;

	@NotNull
	private String surname;

	@NotNull
	@Email
	private String email;

	@NotNull
	private String username;

	@NotNull
	@Size(min = 8, message = "At least 8 chars.")
	private String password;

	@NotNull
	private int iduserrole;

	public User() {

	}

	public User(int iduser, String name, String surname, String email, String username, int iduserrole, String password) {
		this.iduser = iduser;
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.username = username;
		this.iduserrole = iduserrole;
		this.password = password;
	
	}

	public int getUserId() {
		return iduser;
	}

	public void setUserId(int iduser) {
		this.iduser = iduser;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getiduserrole() {
		return iduserrole;
	}

	public void setiduserrole(int iduserrole) {
		this.iduserrole = iduserrole;
	}

	@Override
	public String toString() {
		return "User [iduser=" + iduser + ", name=" + name + ", surname=" + surname + ", email=" + email + ", username="
				+ username + ", password=" + password + ", iduserrole=" + iduserrole + ", getUserId()=" + getUserId()
				+ ", getName()=" + getName() + ", getSurname()=" + getSurname() + ", getRoleId()=" + getiduserrole() + "]";
	}

}
