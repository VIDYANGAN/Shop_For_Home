package com.greatlearning.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.greatlearning.entity.Discount;


@Repository
public interface DiscountRepo extends JpaRepository<Discount,Integer> {

}



