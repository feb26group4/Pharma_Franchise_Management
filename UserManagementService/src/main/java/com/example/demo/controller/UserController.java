package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoginRequestDTO;
import com.example.demo.dto.LoginResponse;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserRegisterDTO;
import com.example.demo.entities.User;
import com.example.demo.services.JwtService;
import com.example.demo.services.UserService;

@RestController
@RequestMapping ("/users")
public class UserController {
	@Autowired
	UserService uservice;
	
//	@GetMapping("/applications")
//	public List<User> allapplications(){
//		return uservice.allapplications();
//	}
	
	@Autowired
	JwtService jwtService;
	
	@Autowired
	AuthenticationManager authManager;	
	
	@PostMapping("/register")
	public boolean registerUser(@RequestBody  UserRegisterDTO user) {		
		return uservice.addUser(user);
	}
	
	@PostMapping("/login")
	public ResponseEntity<LoginResponse> login(@RequestBody LoginRequestDTO request) {
	    Authentication authentication = authManager.authenticate(
	            new UsernamePasswordAuthenticationToken(
	                    request.getUname(),
	                    request.getPassword()));
	    UserDetails userDetails = (UserDetails) authentication.getPrincipal();
	    User user = uservice.getUser(request.getUname());
	    String token = jwtService.generateToken(userDetails);
	    UserDTO userdto = new UserDTO(
	            user.getUname(),
	            user.getFname(),
	            user.getLname(),
	            user.getEmail(),
	            user.getContact(),
	            user.getRole().getRole_id());
	    LoginResponse response = new LoginResponse(userdto, token);
	    return ResponseEntity.ok(response);
	}
	
	@GetMapping("/application")
	public List<User> allapplications(){
		return uservice.allapplications();
	}

}
