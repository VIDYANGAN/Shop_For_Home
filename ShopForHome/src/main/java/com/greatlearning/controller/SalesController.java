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

import com.greatlearning.dao.SalesRepo;
import com.greatlearning.entity.Sales;

@RestController
@RequestMapping("/sales")
@CrossOrigin("*")
public class SalesController {
	@Autowired
	private SalesRepo salesRepo;
	@PostMapping("/insertSales")
	public String insertSales(@RequestBody Sales sales) {
	salesRepo.save(sales);
	return "successfully inserted";
	}
	
	@DeleteMapping("/deleteSales/{salesId}")
	public String deleteSales(@PathVariable("salesId") Integer salesId) {
	salesRepo.deleteById(salesId);
	return "successfully deleted";
	}
	  
	@GetMapping("/getAllSales")  
	private List<Sales> getSales()   
	{  
		return salesRepo.findAll();   
	}
	  
	@GetMapping("/getSales/{salesId}")  
	private Optional<Sales> getSales(@PathVariable("salesId") int salesId)   
	{  
	return salesRepo.findById(salesId);   
	} 
	
	@PutMapping("/updateSales/{salesId}")
	public Sales updateSales(@RequestBody Sales sales)
	{
		return salesRepo.save(sales);
		
	} 

}



