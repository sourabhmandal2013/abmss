package org.psl.abmss.application.repositories;

import java.util.List;

import org.psl.abmss.application.entity.Cities;
import org.springframework.data.repository.CrudRepository;

public interface CitiesStateRepository extends CrudRepository<Cities, Integer> {
	
	List<Cities> findAllByCityState(String stateName);
	
	List<Cities> findAllByCityName(String cityName);
	
	Cities findByCityId(Integer id);
	
}
