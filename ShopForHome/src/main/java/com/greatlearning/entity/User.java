package com.greatlearning.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;
import java.util.Set;
@Entity
@Table(name="user")
//sdsd
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(nullable=false)
	private int userId;
	
	@Column(length = 25)
	private String userName;
	
	@Column(length = 20)
	private String password;
	
	@Column(length = 30)
	private String email;
	
	@Column( length = 10)
	private String phone;
	
	@Column(length = 50)
	private String address;

	@Column(length = 10)
	private String userRole;
	
	
	
	@OneToMany(mappedBy = "user")
	private List<Cart> cart;
	
	@OneToMany(mappedBy = "user")
    private List<Wishlist> wishlist;
	
	

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int userId, String userName, String password, String email, String phone, String address,
			String userRole, List<Cart> cart, List<Wishlist> wishlist) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.userRole = userRole;
		this.cart = cart;
		this.wishlist = wishlist;
	}
	
	@JsonManagedReference(value="user")
	public List<Cart> getCart() {
		return cart;
	}

	public void setCart(List<Cart> cart) {
		this.cart = cart;
	}
	
	@JsonManagedReference(value="userw")
	public List<Wishlist> getWishlist() {
		return wishlist;
	}

	public void setWishlist(List<Wishlist> wishlist) {
		this.wishlist = wishlist;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", password=" + password + ", email=" + email
				+ ", phone=" + phone + ", address=" + address + ", userRole=" + userRole + ", cart=" + cart
				+ ", wishlist=" + wishlist + "]";
	}
	
	


}
