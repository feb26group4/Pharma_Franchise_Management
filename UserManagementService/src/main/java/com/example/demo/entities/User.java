package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int uid;
	@Column
	String uname;
	@Column
	String password;
	@Column
	String fname;
	@Column
	String lname;
	@Column
	String email;
	@Column
	String contact;
	
	@ManyToOne
	@JoinColumn(name="role_id")
	Role role;	

	
	public User(String username, String password, String firstname, String lastname, String email, String contactnumber,
			Role role_id) {
		super();
		this.uname = username;
		this.password = password;
		this.fname = firstname;
		this.lname = lastname;
		this.email = email;
		this.contact = contactnumber;
		this.role = role_id;
	}
	
	public User() {
		
	}

}
