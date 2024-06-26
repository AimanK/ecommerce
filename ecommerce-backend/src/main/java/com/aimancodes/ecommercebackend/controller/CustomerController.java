package com.aimancodes.ecommercebackend.controller;

import com.aimancodes.ecommercebackend.repository.CustomerRepository;
import com.aimancodes.ecommercebackend.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;


    @PostMapping("/newcustomer")
    Customer newCustomer(@RequestBody Customer newCustomer)
    {
        return customerRepository.save(newCustomer);
    }

    @GetMapping("/customers")
    List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }




    
}
