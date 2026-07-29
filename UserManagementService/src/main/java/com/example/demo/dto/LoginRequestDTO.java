package com.example.demo.dto;

import lombok.Data;

@Data
public class LoginRequestDTO {
	String uname, password;

	public LoginRequestDTO(String uname, String password) {
		super();
		this.uname = uname;
		this.password = password;
	}
	
	
}
