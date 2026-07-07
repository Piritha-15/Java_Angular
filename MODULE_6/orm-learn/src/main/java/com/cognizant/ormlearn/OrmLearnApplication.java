package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.service.CountryService;
import com.cognizant.ormlearn.service.EmployeeService;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnApplication.class);

    private static CountryService countryService;
    private static EmployeeService employeeService;

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(OrmLearnApplication.class, args);

        countryService = context.getBean(CountryService.class);
        employeeService = context.getBean(EmployeeService.class);

        LOGGER.info("Inside main");

        // Hands-on 1
        testGetAllCountries();

        // Hands-on 4
        testEmployee();
    }

    private static void testGetAllCountries() {

        LOGGER.info("----- Country Details -----");

        List<Country> countries = countryService.getAllCountries();

        LOGGER.info("Countries = {}", countries);
    }

    private static void testEmployee() {

        LOGGER.info("----- Employee Details -----");

        Employee employee = new Employee();
        employee.setId(103);
        employee.setName("Peter");
        employee.setSalary(70000);

        employeeService.addEmployee(employee);

        List<Employee> employees = employeeService.getEmployees();

        LOGGER.info("Employees = {}", employees);
    }
}