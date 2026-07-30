package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Orders;
import com.example.demo.repository.OrdersRepository;

@Service
public class OrdersService {
	
	
	 @Autowired
	    private OrdersRepository ordersRepository;

	    public List<Orders> getAllOrders() {
	        return ordersRepository.findAll();
	    }
	    
	    public Orders saveOrder(Orders order) {
	        return ordersRepository.save(order);
	    }

}
