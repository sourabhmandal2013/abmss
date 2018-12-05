package org.psl.abmss.application.repositories;

import java.util.Date;
import java.util.List;

import org.psl.abmss.application.entity.Intervention;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterventionRepository extends CrudRepository<Intervention, Integer> {

	public List<Intervention> findAllByPatientIdAndIntrvType(Integer patientId, Integer intrvType);
	
	public List<Intervention> findAllByIntvDt(Date intvDt);
	
}
