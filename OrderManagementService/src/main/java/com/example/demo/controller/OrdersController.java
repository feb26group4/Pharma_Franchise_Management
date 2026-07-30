package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Orders;
import com.example.demo.service.OrdersService;

@RestController
@RequestMapping("/api/orders")
public class OrdersController {
	
	 @Autowired
	    private OrdersService ordersService;

	    @GetMapping
	    public List<Orders> getAllOrders() {
	        return ordersService.getAllOrders();
	    }
	    
	    @PostMapping
	    public Orders createOrder(@RequestBody Orders order) {
	        return ordersService.saveOrder(order);
	    }

}
