package com.greatlearning.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.greatlearning.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {

}
