package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ProductStock;
import com.example.demo.repositories.ProductStockRepository;

@Service
public class ProductStockService {
	
	@Autowired
	ProductStockRepository Prostkrepo;
	
	// get all 
	
	public List<ProductStock> getallstock()
	{
		return Prostkrepo.findAll();
	}

	
	
}
