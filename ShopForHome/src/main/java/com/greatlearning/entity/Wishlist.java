package com.greatlearning.entity;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="Wishlist")

public class Wishlist {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(nullable = false , unique = true)
	private int wishlistId;
	
	public int getWishlistId() {
		return wishlistId;
	}

	public void setWishlistId(int wishlistId) {
		this.wishlistId = wishlistId;
	}
	
	

	public Wishlist() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Wishlist(int wishlistId, Date createTime, User user, List<Product> product) {
		super();
		this.wishlistId = wishlistId;
		this.createTime = createTime;
		this.user = user;
		this.product = product;
	}



	@Column(nullable = false)
	private Date createTime;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "User", referencedColumnName ="userId",nullable = false)
	
    private User user;
	
	@OneToMany(mappedBy = "wishlist")
	private List<Product> product;

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	@JsonBackReference(value="userw")
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
	@JsonManagedReference(value="wishlist")
	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}

	@Override
	public String toString() {
		return "Wishlist [wishlistId=" + wishlistId + ", createTime=" + createTime + ", user=" + user + ", product="
				+ product + "]";
	}

	
}
