package org.psl.abmss.application.service;

import java.util.List;

import org.psl.abmss.application.entity.Institution;

public interface InstitutionService {
	public Institution getInstitutionByInstitutionId(Integer institutionId);

	public List<Institution> getinstitutionByCity(String city);

	public List<Institution> getinstitutionByState(String state);

	public boolean addInstitution(Institution institution);
	
	public Institution updateInstitution(Institution institution);
	
	public boolean deleteInstitution(Integer institutionId);
	
	public List<Institution> getAllInstitution();

	public Long getInstitutionCount();

}
