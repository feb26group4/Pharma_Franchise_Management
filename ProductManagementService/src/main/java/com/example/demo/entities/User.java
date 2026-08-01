package com.example.demo.entities;

import jakarta.persistence.Entity;
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
    private int uid;

    private String uname;

    private String password;

    @ManyToOne
    @JoinColumn(name="role_id")
    private Role role;

}
