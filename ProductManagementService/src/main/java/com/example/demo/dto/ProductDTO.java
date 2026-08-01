package com.example.demo.dto;

import lombok.Data;

@Data
public class ProductDTO {

	private String pname;
    private String type;
    private String description;
    private String packaging_unit;
    
    public ProductDTO(){
    	
    }    
    
}
