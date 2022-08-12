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

import com.greatlearning.dao.CartRepo;
import com.greatlearning.entity.Cart;

@RestController
@RequestMapping("/cart")
@CrossOrigin("*")
public class CartController {
	@Autowired
	private CartRepo cartRepo;
	@PostMapping("/insertCart")
	public String insertcart(@RequestBody Cart cart) {
	cartRepo.save(cart);
	return "successfully inserted";
	}
	
	@DeleteMapping("/deleteCart/{cartId}")
	public String deletecart(@PathVariable("cartId") Integer cartId) {
	cartRepo.deleteById(cartId);
	return "successfully deleted";
	}
	  
	@GetMapping("/getAllcart")  
	private List<Cart> getcart()   
	{  
		return cartRepo.findAll();   
	}
	  
	@GetMapping("/getCart/{cartId}")  
	private Optional<Cart> getcart(@PathVariable("cartId") int cartId)   
	{  
	return cartRepo.findById(cartId);   
	} 
	
	@PutMapping("/updateCart/{cartId}")
	public Cart updatecart(@RequestBody Cart cart)
	{
		return cartRepo.save(cart);
		
	} 

}



