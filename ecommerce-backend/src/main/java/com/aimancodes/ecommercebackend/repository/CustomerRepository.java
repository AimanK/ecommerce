package com.aimancodes.ecommercebackend.repository;

import com.aimancodes.ecommercebackend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long > {
    
}
