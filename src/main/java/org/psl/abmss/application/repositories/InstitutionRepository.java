package org.psl.abmss.application.repositories;

import java.util.List;

import org.psl.abmss.application.entity.Cities;
import org.psl.abmss.application.entity.Institution;
import org.springframework.data.repository.CrudRepository;

public interface InstitutionRepository extends CrudRepository<Institution, Integer> {
	
//	public List<Institution> findAllByCity(String city);
	
	public Institution findByInstitutionId(Integer instutionId);
	
	public List<Institution> findAllByInstitutionName(String institutionName);
	
	public List<Institution> findAllByCityState(List<Cities> citiesList);
	
	public List<Institution> findAll();
}
