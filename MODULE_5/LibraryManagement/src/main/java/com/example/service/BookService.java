package com.example.service;

import com.example.repository.BookRepository;

public class BookService {

    private BookRepository repository;

    public void setRepository(BookRepository repository) {
        this.repository = repository;
    }

    public void displayService() {
        System.out.println("Book Service is working.");
        repository.displayRepository();
    }
}