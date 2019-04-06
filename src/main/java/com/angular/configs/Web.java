package com.angular.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class Web implements WebMvcConfigurer {

    @Override
    public void addViewControllers(final ViewControllerRegistry registry) {
        registry.addViewController("/ana/**").setViewName("forward:/index.html");
        registry.addViewController("/product/**").setViewName("forward:/index.html");
        registry.addViewController("/category/**").setViewName("forward:/index.html");
    }
}
