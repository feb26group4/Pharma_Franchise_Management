package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.dto.ProductDTO;
import com.example.demo.dto.ProductStockDTO;
import com.example.demo.dto.ProductSummaryDTO;
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
	ProductStockRepository psrepo;

	

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
    public Product addNewProduct(ProductDTO productdto) {
        Product prod = new Product(
              productdto.getPname(),
              productdto.getType(),
              productdto.getDescription(),
              productdto.getPackaging_unit()
        );

        return prodrepo.save(prod);       
    }
    
    @Transactional
    public boolean addStock(ProductStockDTO dto) {

        try {

            Product product = prodrepo.findById(dto.getPid())
                    .orElseThrow(() -> new RuntimeException("Product not found"));

            ProductStock stock = new ProductStock();

            stock.setProduct(product);

            stock.setManufDate(dto.getManuf_date());

            stock.setExpiryDate(dto.getExpiry_date());

            stock.setPrice(dto.getPrice());

            stock.setQuantity(dto.getQuantity());

            psrepo.save(stock);

            return true;

        }
        catch(Exception e) {

            e.printStackTrace();

            return false;

        }

    }
    
    public List<ProductSummaryDTO> getProductSummary() {

        List<Product> products = prodrepo.findAll();

        List<ProductSummaryDTO> list = new ArrayList<>();

        for(Product p : products){

            List<ProductStock> stocks =
                    psrepo.findByProductPid(p.getPid());

            int totalQty = 0;

            for(ProductStock s : stocks){
                totalQty += s.getQuantity();
            }

            ProductSummaryDTO dto =
                    new ProductSummaryDTO(
                            p.getPid(),
                            p.getPname(),
                            p.getType(),
                            p.getDescription(),
                            p.getPackaging_unit(),
                            totalQty,
                            stocks.size()
                    );

            list.add(dto);
        }

        return list;
    }
    
    public List<ProductStock> getStockByProduct(Integer pid) {

        Product product = prodrepo.findById(pid)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        return psrepo.findByProduct(product);
    }
    
	
	

}
