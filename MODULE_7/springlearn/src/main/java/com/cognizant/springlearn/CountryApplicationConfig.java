package com.cognizant.springlearn;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

@Configuration
@ImportResource({"classpath:country.xml"})
public class CountryApplicationConfig {

}