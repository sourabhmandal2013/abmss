package org.psl.abmss.application.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.psl.abmss.application.entity.Cities;
import org.psl.abmss.application.entity.Institution;
import org.psl.abmss.application.repositories.CitiesStateRepository;
import org.psl.abmss.application.repositories.InstitutionRepository;
import org.psl.abmss.application.service.InstitutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InstitutionServiceImpl implements InstitutionService {

	@Autowired
	InstitutionRepository institutionRepository;
	
	@Autowired
	CitiesStateRepository cityRepo;
	
	@Override
	public Institution getInstitutionByInstitutionId(Integer institutionId) {
		
		try {
			Institution institution = institutionRepository.findByInstitutionId(institutionId);
			return institution;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}
	
	@Override
	public List<Institution> getinstitutionByState(String state) {
		
		try {
			List<Cities> citiesList = cityRepo.findAllByCityState(state);
			return institutionRepository.findAllByCityState(citiesList);
		}catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}


	@Override
	public List<Institution> getinstitutionByCity(String city) {

		try {
			List<Cities> citiesList = cityRepo.findAllByCityName(city);
			return institutionRepository.findAllByCityState(citiesList);
		}catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}

	@Override
	public boolean addInstitution(Institution institution) {
		
		try {
			institutionRepository.save(institution);
			return true;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return false;
	}

	@Override
	public Institution updateInstitution(Institution institution) {
		try {
			institutionRepository.save(institution);
			return institutionRepository.findByInstitutionId(institution.getInstitutionId());
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}return null;
	}

	@Override
	public boolean deleteInstitution(Integer institutionId) {
		try {
			institutionRepository.deleteById(institutionId);
			return true;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return false;
	}

	@Override
	public List<Institution> getAllInstitution() {
		try {
			List<Institution> institutionList = new ArrayList<>();
			institutionRepository.findAll().forEach(institutionList :: add);
			return institutionList;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}return null;
	}

	@Override
	public Long getInstitutionCount() {
		try {
			return institutionRepository.count();
		}catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}

	
}
