package com.obss.spring.bean;

public class Author {
	private int authorid;
	private String name;
	private String surname;

	public Author() {

	}

	public Author(int authorid, String name, String surname) {
		this.authorid = authorid;
		this.name = name;
		this.surname = surname;
	}

	public int getauthorid() {
		return authorid;
	}

	public void setauthorid(int authorid) {
		this.authorid = authorid;
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

	@Override
	public String toString() {
		return "Author [authorId=" + authorid + ", name=" + name + ", surname=" + surname + ", getAuthorId()="
				+ getauthorid() + ", getName()=" + getName() + ", getSurname()=" + getSurname() + "]";
	}

}
