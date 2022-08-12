package com.greatlearning.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.greatlearning.entity.ProductCategory;


@Repository
public interface ProductCategoryRepo extends JpaRepository<ProductCategory,Integer> {

}



