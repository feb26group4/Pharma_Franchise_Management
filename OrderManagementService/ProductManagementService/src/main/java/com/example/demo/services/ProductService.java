package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Product;
import com.example.demo.repositories.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository prodrepo;
	
	

	

    // for the get
    public List<Product> getallproduct()
    {
   	 return prodrepo.findAll();
    }
    
    // for the post
//    public Product addProduct(Product product)
//    {
//    	return prodrepo.save(product);
//    }
    
    public Product addProduct(Product product) {
        return prodrepo.save(product);
    }
	
	

}
