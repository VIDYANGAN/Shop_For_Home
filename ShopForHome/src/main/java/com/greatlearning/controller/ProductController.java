package com.greatlearning.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.greatlearning.dao.ProductRepo;
import com.greatlearning.entity.Product;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {
	@Autowired
	private ProductRepo productRepo;
	@PostMapping("/insertProduct")
	public String insertProduct(@RequestBody Product product) {
	productRepo.save(product);
	return "successfully inserted";
	}
	
	@DeleteMapping("/deleteProduct/{productId}")
	public String deleteProduct(@PathVariable("productId") Integer productId) {
	productRepo.deleteById(productId);
	return "successfully deleted";
	}
	  
	@GetMapping("/getAllProduct")  
	public List<Product> getProduct()   
	{  
		return productRepo.findAll();   
	}
	  
	@GetMapping("/getProduct/{productId}")  
	public Optional<Product> getProduct(@PathVariable("productId") int productId)   
	{  
	return productRepo.findById(productId);   
	} 
	
	@PutMapping("/updateProduct/{productId}")
	public Product updateProduct(@RequestBody Product product)
	{
		return productRepo.save(product);
		
	} 

}



