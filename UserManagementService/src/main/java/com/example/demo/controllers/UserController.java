package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ApplicationDTO;
import com.example.demo.dto.LoginRequestDTO;
import com.example.demo.dto.LoginResponse;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserRegisterDTO;
import com.example.demo.entities.User;
import com.example.demo.services.JwtService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping ("/users")
public class UserController {
	@Autowired
	UserService uservice;
	
	@Autowired
	JwtService jwtService;
	
	@Autowired
	AuthenticationManager authManager;	
	
	@PostMapping("/register")
	public boolean registerUser(@RequestBody  UserRegisterDTO user) {	
		System.out.println("========== REGISTER ENDPOINT HIT ==========");
		return uservice.addUser(user);
	}
	
//	@PostMapping("/login")
//	public ResponseEntity<LoginResponse> login(@RequestBody  LoginRequestDTO request) {		
//		Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUname(), request.getPassword()));
//		UserDetails userDetails = (UserDetails)authentication.getPrincipal();
//		User user = uservice.getUser(request.getUname());
//		String token = jwtService.generateToken(userDetails.getUsername());
//		UserDTO userdto = new UserDTO(user.getUname(),user.getFname(),user.getLname(),user.getEmail(),user.getContact(),user.getRole().getRole_id());
//		LoginResponse response = new LoginResponse(userdto, token);
//		return ResponseEntity.ok(response);		
//	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginRequestDTO request) {        
	    try {
	        Authentication authentication = authManager.authenticate(
	            new UsernamePasswordAuthenticationToken(request.getUname(), request.getPassword())
	        );
	        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
	        User user = uservice.getUser(request.getUname());
	        String token = jwtService.generateToken(userDetails.getUsername());
	        UserDTO userdto = new UserDTO(
	            user.getUname(),
	            user.getFname(),
	            user.getLname(),
	            user.getEmail(),
	            user.getContact(),
	            user.getRole().getRole_id()
	        );
	        LoginResponse response = new LoginResponse(userdto, token);
	        return ResponseEntity.ok(response);
	    } catch (Exception e) {
	        e.printStackTrace(); // <--- THIS PRINTS THE REAL EXCEPTION IN ECLIPSE
	        return ResponseEntity.status(401).body("Invalid username or password: " + e.getMessage());
	    }
	}
	
	@GetMapping("/applications")
	public List<ApplicationDTO> allapplications(){
		return uservice.getPendingApplications();
	}
	
//	@PatchMapping("/accept")
//	public boolean acceptApplication() {
//		return uservice.acceptApplication();		
//	}
	
	@PutMapping("/applications/{fid}/approve")
	public boolean approveApplication(@PathVariable int fid) {

	    return uservice.approveApplication(fid);
	}
	
	@PutMapping("/applications/{fid}/reject")
	public boolean rejectApplication(@PathVariable int fid) {

	    return uservice.rejectApplication(fid);
	}
	
	

}
