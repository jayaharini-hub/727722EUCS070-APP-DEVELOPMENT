package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Usermodel;
import com.example.backend.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    public UserRepo userrepo;
     public Usermodel saveUser(Usermodel user){
        return userrepo.save(user);
     }
     public List<Usermodel> getAllusers(){
        return userrepo.findAll();
     }

    public Usermodel authenticateProvider(String email, String password) {
        Usermodel user = userrepo.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
