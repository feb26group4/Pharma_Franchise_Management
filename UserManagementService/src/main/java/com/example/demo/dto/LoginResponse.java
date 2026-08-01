package com.example.demo.dto;

import lombok.Data;

@Data
public class LoginResponse {	
	UserDTO user;
	String token;
	public LoginResponse(UserDTO user, String token) {
		super();
		this.user = user;
		this.token = token;
	}	
	
	
	
}
