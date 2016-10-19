package com.demo.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.demo.model.Car;

@RepositoryRestResource(collectionResourceRel = "cars", path = "cars", excerptProjection = Car.class)
public interface CarRepository extends PagingAndSortingRepository<Car, Integer> {
	
}
