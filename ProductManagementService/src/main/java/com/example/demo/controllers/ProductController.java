package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ProductDTO;
import com.example.demo.entities.Product;
import com.example.demo.entities.ProductStock;
import com.example.demo.services.ProductService;

@RestController
@RequestMapping("/Products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {
	@Autowired
	ProductService prodserv;
	
	@GetMapping
	public ResponseEntity<List<ProductSummaryDTO>> getProducts(){

	    return ResponseEntity.ok(
	            prodserv.getProductSummary()
	    );

	}
	
//	@PostMapping
//	public Product addProduct(@RequestBody Product product)
//    {
//    	return prodserv.addProduct(product);
//    }
	
	@PostMapping
	public boolean addProduct(@RequestBody ProductDTO productdto) {
	    return prodserv.addProduct(productdto);
	}
	
	
	
	

}
