package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.ProductStock;
import com.example.demo.services.ProductStockService;

@RestController
@RequestMapping("ProductStock")
public class ProductStockController {
     
	@Autowired
	ProductStockService prostkserv;
	
	@GetMapping
	public List<ProductStock> getStock()
	{
		return prostkserv.getallstock();
	}
	
}
