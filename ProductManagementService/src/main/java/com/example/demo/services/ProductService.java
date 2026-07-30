package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.dto.ProductDTO;
import com.example.demo.entities.Product;
import com.example.demo.entities.ProductStock;
import com.example.demo.repositories.ProductRepository;
import com.example.demo.repositories.ProductStockRepository;

import jakarta.transaction.Transactional;

@Service
public class ProductService {
	@Autowired
	ProductRepository prodrepo;
	@Autowired
	ProductStockRepository proStkRepo;

	

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
    
    @Transactional
    public boolean addProduct(ProductDTO productdto) {

        try {

            // 1. Create Product
            Product prod = new Product(
                    productdto.getPname(),
                    productdto.getType(),
                    productdto.getDescription(),
                    productdto.getPackaging_unit()
            );

            // 2. Save Product
            Product p = prodrepo.save(prod);

            // 3. Create ProductStock
            ProductStock pstock = new ProductStock();

            // IMPORTANT: Connect ProductStock with Product
            pstock.setProduct(p);

            pstock.setManuf_date(productdto.getManuf_date());
            pstock.setExpiry_date(productdto.getExpiry_date());
            pstock.setPrice(productdto.getPrice());
            pstock.setQuantity(productdto.getQuantity());

            // 4. Save ProductStock
            proStkRepo.save(pstock);

            return true;

        } catch (Exception e) {

            e.printStackTrace();
            return false;
        }
    }
	
	

}
