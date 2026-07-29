package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	
	//@Query("select u from Users u where role_id = 5")
	@Query(value = "SELECT * FROM users WHERE role_id = 5", nativeQuery = true)
	public List<User> allapplications();
	
	User findByUname(String uname);


}
