package com.example.demo.dto;

import lombok.Data;

@Data
public class UserRegisterDTO {
	String uname, password, fname, lname, email, contact; 
	int role_id;
	
	
	public UserRegisterDTO(String uname, String password, String fname, String lname, String email, String contact,
			int role_id) {
		super();
		this.uname = uname;
		this.password = password;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contact = contact;
		this.role_id = role_id;
	}
	public UserRegisterDTO() {
		
	}
	
	

}
