package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Orders;
import com.example.demo.repository.OrderRepository;

@Service
public class OrderService {
	
	  @Autowired
	  private OrderRepository orderRepository;
	  
	  
	  
	    public List<Orders> getAllOrders() {
	        return orderRepository.findAll();
	    }


}
