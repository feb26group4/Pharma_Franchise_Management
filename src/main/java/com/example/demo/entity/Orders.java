package com.example.demo.entity;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
<<<<<<< HEAD
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
=======
import jakarta.persistence.Table;
import lombok.Data;

>>>>>>> main

@Entity
@Table(name = "orders")
public class Orders {
<<<<<<< HEAD
	
=======

>>>>>>> main
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "oid")
    private Integer oid;

<<<<<<< HEAD
    @ManyToOne
    @JoinColumn(name = "uid")
    private User user;

    @ManyToOne
    @JoinColumn(name = "fid")
    private Franchise franchise;
=======
    @Column(name = "uid")
    private Integer uid;  //user table foreign key

    @Column(name = "fid")
    private Integer fid; //franchise table foreign key
>>>>>>> main

    @Column(name = "amount")
    private BigDecimal amount;

    @Column(name = "payment_mode")
    private String paymentMode;

	public Integer getOid() {
		return oid;
	}

	public void setOid(Integer oid) {
		this.oid = oid;
	}

<<<<<<< HEAD
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Franchise getFranchise() {
		return franchise;
	}

	public void setFranchise(Franchise franchise) {
		this.franchise = franchise;
=======
	public Integer getUid() {
		return uid;
	}

	public void setUid(Integer uid) {
		this.uid = uid;
	}

	public Integer getFid() {
		return fid;
	}

	public void setFid(Integer fid) {
		this.fid = fid;
>>>>>>> main
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}
    
    
<<<<<<< HEAD

=======
    
    
>>>>>>> main
}
