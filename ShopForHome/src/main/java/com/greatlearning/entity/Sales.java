package com.greatlearning.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="Sales")
public class Sales {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(nullable=false)
	private int salesId;
	
	@Column(nullable=false)
	private Date create_time;
	
	@Column(length = 20)
	private int quantity;
	
	@OneToMany(mappedBy = "sales")
	private List<Product> product;

	public Sales() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Sales(int salesId, Date create_time, int quantity, List<Product> product) {
		super();
		this.salesId = salesId;
		this.create_time = create_time;
		this.quantity = quantity;
		this.product = product;
	}


	public int getSalesId() {
		return salesId;
	}

	public void setSalesId(int salesId) {
		this.salesId = salesId;
	}

	public Date getCreate_time() {
		return create_time;
	}

	public void setCreate_time(Date create_time) {
		this.create_time = create_time;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	@JsonManagedReference(value="sales")
	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}

	@Override
	public String toString() {
		return "Sales [salesId=" + salesId + ", create_time=" + create_time + ", quantity=" + quantity + ", product="
				+ product + "]";
	}

	
	


	
	

}
