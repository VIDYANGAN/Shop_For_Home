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
import com.greatlearning.dao.WishlistRepo;
import com.greatlearning.entity.Wishlist;

@RestController
@RequestMapping("/wishlist")
@CrossOrigin("*")
public class WishlistController {
	@Autowired
	private WishlistRepo wishlistRepo;
	@PostMapping("/insertWishlist")
	public String insertWishlist(@RequestBody Wishlist wishlist) {
	wishlistRepo.save(wishlist);
	return "successfully inserted";
	}
	
	@DeleteMapping("/deleteWishlist/{wishlistId}")
	public String deleteWishlist(@PathVariable("wishlistId") Integer wishlistId) {
	wishlistRepo.deleteById(wishlistId);
	return "successfully deleted";
	}
	  
	@GetMapping("/getAllWishlist")  
	private List<Wishlist> getWishlist()   
	{  
		return wishlistRepo.findAll();   
	}
	  
	@GetMapping("/getWishlist/{wishlistId}")  
	private Optional<Wishlist> getWishlist(@PathVariable("wishlistId") int wishlistId)   
	{  
	return wishlistRepo.findById(wishlistId);   
	} 
	
	@PutMapping("/updateWishlist/{wishlistId}")
	public Wishlist updateWishlist(@RequestBody Wishlist wishlist)
	{
		return wishlistRepo.save(wishlist);
		
	} 

}



