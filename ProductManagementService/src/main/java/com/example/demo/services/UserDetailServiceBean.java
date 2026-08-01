package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@Service
public class UserDetailServiceBean implements UserDetailsService {

	@Autowired
	UserRepository urepo;
	
	@Autowired
	PasswordEncoder encoder;
	
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = urepo.findByUname(username);
		if(user == null) {
			throw new UsernameNotFoundException("User not found: " + username);
		}
		System.out.println(user.getRole().getRole_name());
		return org.springframework.security.core.userdetails.User
				.withUsername(username)
				.password(user.getPassword())
				.roles(user.getRole().getRole_name())
				.build();
	}

}
