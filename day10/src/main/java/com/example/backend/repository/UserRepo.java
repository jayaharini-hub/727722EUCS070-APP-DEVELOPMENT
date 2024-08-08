package com.example.backend.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Usermodel;


@Repository
public interface UserRepo extends JpaRepository<Usermodel, Long> {
    Usermodel findByEmail(String email);
    Usermodel findByName(String name);
    List<Usermodel> findAll();
}
