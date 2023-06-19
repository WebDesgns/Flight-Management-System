package com.ibm.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.ibm.model.Airport;

@Repository
public interface AirportDao extends CrudRepository<Airport, String> {

}
