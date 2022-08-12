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
import com.greatlearning.dao.ProductCategoryRepo;
import com.greatlearning.entity.ProductCategory;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class ProductCategoryController {
	@Autowired
	private ProductCategoryRepo productCategoryRepo;
	@PostMapping("/insertproductCategory")
	public String insertproductCategory(@RequestBody ProductCategory productCategory) {
	productCategoryRepo.save(productCategory);
	return "successfully inserted";
	}
	
	@DeleteMapping("/deleteproductCategory/{categoryId}")
	public String deleteproductCategory(@PathVariable("categoryId") Integer categoryId) {
	productCategoryRepo.deleteById(categoryId);
	return "successfully deleted";
	}
	  
	@GetMapping("/getAllproductCategory")  
	private List<ProductCategory> getproductCategory()   
	{  
		return productCategoryRepo.findAll();   
	}
	  
	@GetMapping("/getproductCategory/{categoryId}")  
	private Optional<ProductCategory> getproductCategory(@PathVariable("categoryId") int categoryId)   
	{  
	return productCategoryRepo.findById(categoryId);   
	} 
	
	@PutMapping("/updateproductCategory/{categoryId}")
	public ProductCategory updateproductCategory(@RequestBody ProductCategory productCategory)
	{
		return productCategoryRepo.save(productCategory);
		
	} 

}



