package com.greatlearning.entity;
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
@Table(name="product")

public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(nullable = false , unique = true)
	private int productId;
	
	@Column(nullable = false ,length = 25)
	private String productName;
	
	@Column(nullable = false , length = 100)
	private String productDescription;
	
	@Column(nullable = false )
	private Double productprice;
	
	@Column(nullable = false)
	private int productStock;
	
	@Column(nullable = false)
	private int quantity;
	
	@Column(nullable = false)
	private String productImg;
	

	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "productCategory_id", referencedColumnName ="categoryId",nullable=false)
	
    private ProductCategory productcategory;
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "Discount_id", referencedColumnName ="discountId")
	
    private Discount discount;
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "Cart", referencedColumnName ="cartId")
	
    private Cart cart;
  
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "Wishlist", referencedColumnName ="wishlistId")
	
    private Wishlist wishlist;
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "Sales", referencedColumnName ="salesId")
	
    private Sales sales;

	
	@JsonBackReference(value="wishlist")
	public Wishlist getWishlist() {
		return wishlist;
	}

	public void setWishlist(Wishlist wishlist) {
		this.wishlist = wishlist;
	}

	public int getProductId() {
		return productId;
	}

	
	@JsonBackReference(value="sales")
	public Sales getSales() {
		return sales;
	}

	public void setSales(Sales sales) {
		this.sales = sales;
	}

	public Product(int productId, String productName, String productDescription, Double productprice, int productStock,
			int quantity, String productImg, ProductCategory productcategory, Discount discount, Cart cart,
			Wishlist wishlist, Sales sales) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productDescription = productDescription;
		this.productprice = productprice;
		this.productStock = productStock;
		this.quantity = quantity;
		this.productImg = productImg;
		this.productcategory = productcategory;
		this.discount = discount;
		this.cart = cart;
		this.wishlist = wishlist;
		this.sales = sales;
	}

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public Double getProductprice() {
		return productprice;
	}

	public void setProductprice(Double productprice) {
		this.productprice = productprice;
	}

	public int getProductStock() {
		return productStock;
	}

	public void setProductStock(int productStock) {
		this.productStock = productStock;
	}
	
	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public String getProductImg() {
		return productImg;
	}

	public void setProductImg(String productImg) {
		this.productImg = productImg;
	}
	
	@JsonBackReference(value="category")
	public ProductCategory getProductcategory() {
		return productcategory;
	}

	public void setProductcategory(ProductCategory productcategory) {
		this.productcategory = productcategory;
	}
	
	@JsonBackReference(value="discount")
	public Discount getDiscount() {
		return discount;
	}
	
	
	@JsonBackReference(value="cart")
	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}

	
	public void setDiscount(Discount discount) {
		this.discount = discount;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", productDescription="
				+ productDescription + ", productprice=" + productprice + ", productStock=" + productStock
				+ ", quantity=" + quantity + ", productImg=" + productImg + ", productcategory=" + productcategory
				+ ", discount=" + discount + ", cart=" + cart + ", wishlist=" + wishlist + ", sales=" + sales + "]";
	}

	
	
	
	
	
	
	


}
