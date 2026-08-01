package com.example.demo.entities;

import java.math.BigDecimal;
import java.sql.Date;

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
@Table(name="product_stock")
public class ProductStock {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="sid")
	private Integer sid;

	// join the table
	@ManyToOne
	@JoinColumn(name="pid")
	private Product product;
	
	@Column(name="manuf_date")
	private Date manufDate;
	
	@Column(name = "expiry_date") 
    private Date expiryDate;
	
    @Column(name="price")
    private BigDecimal price;
    
    @Column(name="quantity")
    private Integer quantity;
    
    
	
	
  
}
