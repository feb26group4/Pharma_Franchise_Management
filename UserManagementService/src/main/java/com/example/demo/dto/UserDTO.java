package com.example.demo.dto;

import lombok.Data;

@Data
public class UserDTO {
	
	//int uid;
	String uname;
	String fname;
	String lname;
	String email;
	String contact;
	int role_id;
	
	public UserDTO() {
		
	}
	
	public UserDTO( String uname, String fname, String lname, String email, String contact, int role_id) {
		super();
		//this.uid = uid;
		this.uname = uname;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contact = contact;
		this.role_id = role_id;
	}	
	
	
	
}
