package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.UserRegisterDTO;
import com.example.demo.entities.Role;
import com.example.demo.entities.User;
import com.example.demo.repositories.RoleRepository;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository urepo;
	
	@Autowired
	RoleRepository rrepo;
	
	@Autowired
	PasswordEncoder encoder;
	
	public boolean addUser(UserRegisterDTO userdto) {		
		Role role = rrepo.findById(userdto.getRole_id()).orElseThrow(() ->  new RuntimeException() );
		User user = new User(userdto.getUname(),encoder.encode(userdto.getPassword()), userdto.getFname(), userdto.getLname(), userdto.getEmail(), userdto.getContact(), role);
		try {
		  urepo.save(user);
		  return true;
		}
		catch(Exception e) {
			return false;
		}
	}
	
	public User getUser(String username) {
		return urepo.findByUname(username);
	}
	
	public List<User> allapplications(){
		return urepo.allapplications();
	}

}
