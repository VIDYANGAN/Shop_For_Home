package com.greatlearning.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.greatlearning.entity.Sales;


@Repository
public interface SalesRepo extends JpaRepository<Sales,Integer> {

}



