package com.aimancodes.ecommercebackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Customer {

    
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String bio;
    private String email;
    private String password;
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id)
    {
        this.id = id;
    }
    
    public String getUsername()
    {
        return username;
    }
    
    public void setUsername(String username)
    {
        this.username = username;
    }
    
    public String getBio()
    {
        return bio;
    }
    
    public void setName(String bio)
    {
        this.bio = bio;
    }
    
    public String getEmail()
    {
        return email;
    }
    
    public void setEmail(String email)
    {
        this.email = email;
    }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }
}
