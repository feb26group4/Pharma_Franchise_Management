package com.example.demo.dto;

import java.math.BigDecimal;
import java.sql.Date;

import lombok.Data;

@Data
public class ProductStockDTO {

    private Integer pid;

    private Date manuf_date;

    private Date expiry_date;

    private BigDecimal price;

    private Integer quantity;
    
    public ProductStockDTO() {
    	
    }

}
