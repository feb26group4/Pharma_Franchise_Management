package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductSummaryDTO {

    private Integer pid;

    private String pname;

    private String type;

    private String description;

    private String packaging_unit;

    private Integer totalQuantity;

    private Integer numberOfBatches;

}