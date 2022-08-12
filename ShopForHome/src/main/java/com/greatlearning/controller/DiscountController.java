package com.greatlearning.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.greatlearning.dao.DiscountRepo;
import com.greatlearning.entity.Discount;

@RestController
public class DiscountController {
	@Autowired
	private DiscountRepo discountRepo;
	@PostMapping("/insertdiscount")
	public String insertdiscount(@RequestBody Discount discount) {
	discountRepo.save(discount);
	return "successfully inserted";
	}
	
	@DeleteMapping("/deleteDiscount/{discountId}")
	public String deletediscount(@PathVariable("discountId") Integer discountId) {
	discountRepo.deleteById(discountId);
	return "successfully deleted";
	}
	  
	@GetMapping("/getAllDiscount")  
	private List<Discount> getdiscount()   
	{  
		return discountRepo.findAll();   
	}
	  
	@GetMapping("/getDiscount/{discountId}")  
	private Optional<Discount> getdiscount(@PathVariable("discountId") int discountId)   
	{  
	return discountRepo.findById(discountId);   
	} 
	
	@PutMapping("/updateDiscount/{discountId}")
	public Discount updatediscount(@RequestBody Discount discount)
	{
		return discountRepo.save(discount);
		
	} 

}



