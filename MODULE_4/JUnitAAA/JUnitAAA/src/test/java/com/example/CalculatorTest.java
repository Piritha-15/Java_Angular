package com.example;

import org.junit.Assert;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        System.out.println("Setting up...");
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        System.out.println("Cleaning up...");
        calculator = null;
    }

    @Test
    public void testAddition() {
        int a = 10;
        int b = 20;
        int result = calculator.add(a, b);
        Assert.assertEquals(30, result);
    }
}