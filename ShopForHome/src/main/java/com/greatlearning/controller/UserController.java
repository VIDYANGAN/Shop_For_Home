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
import com.greatlearning.dao.UserRepo;
import com.greatlearning.entity.User;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	@Autowired
	private UserRepo userRepo;
	@PostMapping("/insertUser")
	public String insertUser(@RequestBody User user) {
	userRepo.save(user);
	return "successfully inserted";
	}
	
	@DeleteMapping("/delete/{userId}")
	public String deleteUser(@PathVariable("userId") Integer userId) {
	userRepo.deleteById(userId);
	return "successfully deleted";
	}
	  
	@GetMapping("/getAll")  
	private List<User> getUser()   
	{  
		return userRepo.findAll();   
	}
	  
	@GetMapping("/get/{userId}")  
	private Optional<User> getUser(@PathVariable("userId") int userId)   
	{  
	return userRepo.findById(userId);   
	} 
	
	@PutMapping("/update/{userId}")
	public User updateUser(@RequestBody User user)
	{
		return userRepo.save(user);
		
	} 

}



