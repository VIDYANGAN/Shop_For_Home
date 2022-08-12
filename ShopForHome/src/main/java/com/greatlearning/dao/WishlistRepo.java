package com.greatlearning.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.greatlearning.entity.Wishlist;


@Repository
public interface WishlistRepo extends JpaRepository<Wishlist,Integer> {

}



