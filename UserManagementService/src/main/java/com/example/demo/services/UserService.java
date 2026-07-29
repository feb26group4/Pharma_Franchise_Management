package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.ApplicationDTO;
import com.example.demo.dto.UserRegisterDTO;
import com.example.demo.entities.Franchise;
import com.example.demo.entities.Role;
import com.example.demo.entities.User;
import com.example.demo.repositories.FranchiseRepository;
import com.example.demo.repositories.RoleRepository;
import com.example.demo.repositories.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService {
	@Autowired
	UserRepository urepo;
	
	@Autowired
	RoleRepository rrepo;
	
	@Autowired
	FranchiseRepository frepo;
	
	@Autowired
	PasswordEncoder encoder;
	
//	@Transactional
//	public boolean addUser(UserRegisterDTO userdto) {		
//		Role role = rrepo.findById(5).orElseThrow(() ->  new RuntimeException() );
//		User user = new User(userdto.getUname(),encoder.encode(userdto.getPassword()), userdto.getFname(), userdto.getLname(), userdto.getEmail(), userdto.getContact(), role);
//		try {
//		  urepo.save(user);
//		  return true;
//		}
//		catch(Exception e) {
//			return false;
//		}
//	}
	
	@Transactional
	public boolean addUser(UserRegisterDTO userdto) {

	    // Get Applicant role (role_id = 5)
	    Role applicantRole = rrepo.findById(5)
	            .orElseThrow(() -> new RuntimeException("Applicant role not found"));

	    // Create User
	    User user = new User(
	            userdto.getUname(),
	            encoder.encode(userdto.getPassword()),
	            userdto.getFname(),
	            userdto.getLname(),
	            userdto.getEmail(),
	            userdto.getContact(),
	            applicantRole
	    );

	    // Save User first
	    User savedUser = urepo.save(user);

	    // Create Franchise application
	    Franchise franchise = new Franchise();

	    franchise.setUser(savedUser);
	    franchise.setFranchiseName(userdto.getFranchiseName());
	    franchise.setAddress(userdto.getAddress());
	    franchise.setRegno(userdto.getRegno());

	    // New application is inactive
	    franchise.setStatus(0);

	    // Save Franchise application
	    frepo.save(franchise);

	    return true;
	}
	
	public User getUser(String username) {
		return urepo.findByUname(username);
	}
	
//	public List<User> allapplicants(){
//		return urepo.allapplications();
//	}
	
//	public boolean acceptApplication() {
//		
//		return
//	}
	
	public List<ApplicationDTO> getPendingApplications() {

	    List<Franchise> franchises = frepo.findByStatus(0);

	    return franchises.stream().map(franchise -> {

	        User user = franchise.getUser();

	        ApplicationDTO dto = new ApplicationDTO();

	        dto.setUid(user.getUid());
	        dto.setUname(user.getUname());
	        dto.setFname(user.getFname());
	        dto.setLname(user.getLname());
	        dto.setEmail(user.getEmail());
	        dto.setContact(user.getContact());

	        dto.setFid(franchise.getFid());
	        dto.setFranchiseName(franchise.getFranchiseName());
	        dto.setAddress(franchise.getAddress());
	        dto.setRegno(franchise.getRegno());
	        dto.setStatus(franchise.getStatus());

	        return dto;

	    }).toList();
	}
	
	@Transactional
	public boolean approveApplication(int fid) {

	    Franchise franchise = frepo.findById(fid)
	            .orElseThrow(() -> new RuntimeException("Application not found"));

	    User user = franchise.getUser();

	    Role franchiseRole = rrepo.findById(3)
	            .orElseThrow(() -> new RuntimeException("Franchise role not found"));

	    user.setRole(franchiseRole);

	    franchise.setStatus(1);

	    urepo.save(user);
	    frepo.save(franchise);

	    return true;
	}
	
	@Transactional
	public boolean rejectApplication(int fid) {

	    Franchise franchise = frepo.findById(fid)
	            .orElseThrow(() -> new RuntimeException("Application not found"));

	    franchise.setStatus(2);

	    frepo.save(franchise);

	    return true;
	}

}
