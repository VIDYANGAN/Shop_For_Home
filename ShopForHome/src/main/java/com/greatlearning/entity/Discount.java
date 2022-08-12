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
@Table(name="Discount")

public class Discount {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(nullable = false , unique = true)
	private int discountId;
	
	@Column(nullable = false, length = 25)
	private String discountName;
	
	@Column(nullable = false)
	private Float discountPercentage;
	
	
	@Column(nullable = false)
	private Date createTime;
	

	private Date updateTime;
	
	@OneToMany(mappedBy = "discount")
	
    private List<Product> product;
	

	public Discount() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Discount(int discountId, String discountName, Float discountPercentage, Date createTime, Date updateTime,
			List<Product> product) {
		super();
		this.discountId = discountId;
		this.discountName = discountName;
		this.discountPercentage = discountPercentage;
		this.createTime = createTime;
		this.updateTime = updateTime;
		this.product = product;
	}

	public int getDiscountId() {
		return discountId;
	}

	public void setDiscountId(int discountId) {
		this.discountId = discountId;
	}

	public String getDiscountName() {
		return discountName;
	}

	public void setDiscountName(String discountName) {
		this.discountName = discountName;
	}

	public Float getDiscountPercentage() {
		return discountPercentage;
	}

	public void setDiscountPercentage(Float discountPercentage) {
		this.discountPercentage = discountPercentage;
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

	
	@JsonManagedReference(value="discount")
	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}

	@Override
	public String toString() {
		return "Discount [discountId=" + discountId + ", discountName=" + discountName + ", discountPercentage="
				+ discountPercentage + ", createTime=" + createTime + ", updateTime=" + updateTime + ", product="
				+ product + "]";
	}

}
