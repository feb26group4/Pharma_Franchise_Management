package com.example.demo.dto;

import lombok.Data;

@Data
public class UserRegisterDTO {
	String uname, password, fname, lname, email, contact;
		
	String franchiseName,address;
	
	long regno;
	
	public UserRegisterDTO() {
		
	}

	public UserRegisterDTO(String uname, String password, String fname, String lname, String email, String contact,
			String franchiseName, String address, long regno) {
		super();
		this.uname = uname;
		this.password = password;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contact = contact;
		this.franchiseName = franchiseName;
		this.address = address;
		this.regno = regno;
	}

	

	
	
	
//	public UserRegisterDTO(String uname, String password, String fname, String lname, String email, String contact) {
//		super();
//		this.uname = uname;
//		this.password = password;
//		this.fname = fname;
//		this.lname = lname;
//		this.email = email;
//		this.contact = contact;
//	}
	
	

}
