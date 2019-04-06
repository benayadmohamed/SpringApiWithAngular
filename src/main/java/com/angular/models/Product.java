package com.angular.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.validator.constraints.UniqueElements;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
@ToString
public class Product {

    @Id
    @GeneratedValue
    private long code;
    @NotNull
    private String name;
    @Min(0)
    private float pric;

    @ManyToOne()
    private Category category;
}
