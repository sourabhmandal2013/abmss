package org.psl.abmss.application.repositories;

import java.util.List;

import org.psl.abmss.application.entity.Transportation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransportationRepository extends CrudRepository<Transportation, Integer> {

	public Transportation findByTransId(Integer id);
	
	public Transportation findByPatientId(Integer id);
	
	public List<Transportation> findAllByPatientId(Integer id);
	
	
}
