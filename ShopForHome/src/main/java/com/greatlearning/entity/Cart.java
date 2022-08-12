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
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="Cart")

public class Cart {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(nullable = false , unique = true)
	private int cartId;
	
	@Column(nullable = false)
	private double total;
	
	@Column(nullable = false)
	private Date createTime;
	
	@Column(nullable = false)
	private Date updateTime;
	
	
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "User", referencedColumnName ="userId",nullable = false)
	
    private User user;
	
	
	
	@OneToMany(mappedBy = "cart")
	
	private List<Product> product;
	
	

	public Cart(int cartId, double total, Date createTime, Date updateTime, User user, List<Product> product) {
		super();
		this.cartId = cartId;
		this.total = total;
		this.createTime = createTime;
		this.updateTime = updateTime;
		this.user = user;
		this.product = product;
	}

	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}


	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}
	
	@JsonBackReference(value="user")
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	@JsonManagedReference(value="cart")
	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}

	@Override
	public String toString() {
		return "Cart [cartId=" + cartId + ", total=" + total + ", createTime=" + createTime
				+ ", UpdateTime=" + updateTime + ", user=" + user + ", product=" + product + "]";
	}
	
	
}
