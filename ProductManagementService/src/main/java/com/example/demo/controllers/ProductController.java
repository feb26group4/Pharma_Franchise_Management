package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Product;
import com.example.demo.services.ProductService;

@RestController
@RequestMapping("/Products")
public class ProductController {
	@Autowired
	ProductService prodserv;
	
	@GetMapping
	 public List<Product> getproduct()
	    {
	   	 return prodserv.getallproduct();
	    }
	
//	@PostMapping
//	public Product addProduct(@RequestBody Product product)
//    {
//    	return prodserv.addProduct(product);
//    }
	
	@PostMapping
	public Product addProduct(@RequestBody Product product) {
	    return prodserv.addProduct(product);
	}
	
	
	

}
