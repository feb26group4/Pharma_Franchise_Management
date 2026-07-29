package com.example.demo.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "order_details")
public class OrderDetails {

	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "odid")
	    private Integer odid;

	    @Column(name = "pid")
	    private Integer pid;

	    @Column(name = "oid")
	    private Integer oid;

	    @Column(name = "quantity")
	    private Integer quantity;

	    @Column(name = "date")
	    private LocalDate date;

	    @Column(name = "sid")
	    private Integer sid;
}
