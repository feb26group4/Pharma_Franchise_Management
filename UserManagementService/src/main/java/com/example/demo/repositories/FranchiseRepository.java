package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Franchise;
@Repository
public interface FranchiseRepository extends JpaRepository<Franchise, Integer> {
	
	List<Franchise> findByStatus(int status);

}
