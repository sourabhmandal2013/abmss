package org.psl.abmss.application.repositories;

import java.util.List;

import org.psl.abmss.application.entity.Patient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends CrudRepository<Patient, Integer> {

	List<Patient> findAllByChildFirstName(String name);
	
	List<Patient> findAllByChildLastName(String name);
	
}
