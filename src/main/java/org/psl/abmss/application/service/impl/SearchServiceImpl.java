package org.psl.abmss.application.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.psl.abmss.application.entity.Doctor;
import org.psl.abmss.application.entity.Institution;
import org.psl.abmss.application.entity.Patient;
import org.psl.abmss.application.entity.Role;
import org.psl.abmss.application.entity.Users;
import org.psl.abmss.application.repositories.DoctorRepository;
import org.psl.abmss.application.repositories.InstitutionRepository;
import org.psl.abmss.application.repositories.PatientRepository;
import org.psl.abmss.application.repositories.UserRepository;
import org.psl.abmss.application.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SearchServiceImpl implements SearchService {

	@Autowired
	PatientRepository patientRepository;
	
	@Autowired
	InstitutionRepository institutionRepository;
	
	@Autowired
	DoctorRepository doctorRepository;
	
	@Autowired
	UserRepository userRepository;
	
	
	@Override
	public List<Object> search(String searchString, boolean isPatient, boolean isCenter, boolean isDoctor,
			boolean isProjectAnimator) {
		
		ArrayList<Object> resultObject = new ArrayList<Object>();
		
		List<Patient> resultP = new ArrayList<Patient>();
		List<Institution> resultI = new ArrayList<Institution>();
		List<Doctor> resultD = new ArrayList<Doctor>();
		List<Users> resultU = new ArrayList<Users>();
		
		if(searchString.matches("[0-9]+")) {
			if(isPatient == true)
				resultP = searchPatientId(searchString);
			if(isCenter == true)
				resultI = searchCenterId(searchString);
			if(isDoctor == true)
				resultD = searchDoctorId(searchString);
			if(isProjectAnimator == true)
				resultU = searchProjectAnimatorId(searchString);
		}
		else{
			if(isPatient == true)
				resultP = searchPatientString(searchString);
			if(isCenter == true)
				resultI = searchCenterString(searchString);
			if(isDoctor == true)
				resultD = searchDoctorString(searchString);
			if(isProjectAnimator == true)
				resultU = searchProjectAnimatorString(searchString);	
		}
		resultObject.addAll(resultP);
		resultObject.addAll(resultD);
		resultObject.addAll(resultI);
		resultObject.addAll(resultU);
		
		return resultObject;
	}


	private List<Patient> searchPatientId(String searchString) {
		List<Patient> result = new ArrayList<Patient>();
		result.add(patientRepository.findById(Integer.valueOf(searchString)).get());
		return result;
	}
	private List<Institution> searchCenterId(String searchString) {
		List<Institution> result = new ArrayList<Institution>();
		result.add(institutionRepository.findById(Integer.valueOf(searchString)).get());
		return result;
	}
	private List<Doctor> searchDoctorId(String searchString) {
		List<Doctor> result = new ArrayList<Doctor>();
		result.add(doctorRepository.findById(Integer.valueOf(searchString)).get());
		return result;
	}
	private List<Users> searchProjectAnimatorId(String searchString) {
		List<Users> result = new ArrayList<Users>();
		Role projectAnimatorRole = new Role();
		projectAnimatorRole.setRole("ROLE_PROJECT_ANIMATOR");
		projectAnimatorRole.setId(4);
		
		result.add(userRepository.findById(Integer.valueOf(searchString)).get());
		for (Users users : result) {
			if(!users.getRoles().contains(projectAnimatorRole));
			{
				result.remove(users);
			}
		}
		return result;
	}	
	private List<Patient> searchPatientString(String searchString) {
		List<Patient> result = new ArrayList<Patient>();
		patientRepository.findAllByChildFirstName(searchString).forEach(result :: add);
		patientRepository.findAllByChildLastName(searchString).forEach(result :: add);
		return result;
	}
	private List<Institution> searchCenterString(String searchString) {
		List<Institution> result = new ArrayList<Institution>();
		institutionRepository.findAllByInstitutionName(searchString).forEach(result :: add);
		return result;
	}
	private List<Doctor> searchDoctorString(String searchString) {
		List<Doctor> result = new ArrayList<Doctor>();
		doctorRepository.findAllByDocName(searchString).forEach(result :: add);
		return result;
	}
	private List<Users> searchProjectAnimatorString(String searchString) {
		List<Users> result = new ArrayList<Users>();
		Role projectAnimatorRole = new Role();
		projectAnimatorRole.setRole("ROLE_PROJECT_ANIMATOR");
		projectAnimatorRole.setId(4);
		
		userRepository.findAllByUserName(searchString).forEach(result :: add);
		for (Users users : result) {
			if(!users.getRoles().contains(projectAnimatorRole));
			{
				result.remove(users);
			}
		}
		
		return result;
	}
}
