package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Usermodel;
import com.example.backend.service.UserService;
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    public UserService userservice;

    @CrossOrigin(origins="*")
    @PostMapping("/post")
    public Usermodel createUser(@RequestBody Usermodel user) {
        return userservice.saveUser(user);
    }

   
    @CrossOrigin(origins="*")
    @GetMapping("/get")
    public List<Usermodel> getAllUsers() {
        return userservice.getAllusers();
    }
    
    @CrossOrigin(origins="*")
    @PostMapping("/signin")
    public ResponseEntity<String> signIn(@RequestBody SignInRequest signInRequest) {
       Usermodel user = userservice.authenticateProvider(signInRequest.getEmail(), signInRequest.getPassword());
        if (user != null) {
            return ResponseEntity.ok("Sign in successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Sign in failed: Invalid email or password");
        }
       }

}
