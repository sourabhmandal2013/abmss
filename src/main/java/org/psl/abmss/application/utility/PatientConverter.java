package org.psl.abmss.application.utility;

import java.util.HashSet;
import java.util.Set;

import org.psl.abmss.application.dto.PatientDTO;
import org.psl.abmss.application.entity.Institution;
import org.psl.abmss.application.entity.Patient;
import org.psl.abmss.application.repositories.InstitutionRepository;
import org.psl.abmss.application.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PatientConverter {
	
	/*@Autowired 
	InstitutionConverter institutionConverter;
	
	@Autowired 
	UsersConverter userConverter;*/
	
	@Autowired 
	InstitutionRepository institutionRepository;
	
	@Autowired 
	UserRepository userRepository;
	
	
	public Patient dtoToPatient(PatientDTO patientDTO) {
		Patient patient = new Patient();
		
		patient.setAddress(patientDTO.getAddress());
		patient.setAge(patientDTO.getAge());
		patient.setAlt_con_no_1(patientDTO.getAlt_con_no_1());
		patient.setAlt_con_no_2(patientDTO.getAlt_con_no_2());
//		patient.setInstitution(institutionConverter.dtoToInstitution(patientDTO.getCenter()));
		patient.setChildDob(patientDTO.getChildDob());
		patient.setChildFirstName(patientDTO.getChildFirstName());
		patient.setChildLastName(patientDTO.getChildLastName());
		patient.setCity(patientDTO.getCity());
		patient.setEmail_id(patientDTO.getEmail_id());
//		patient.setEnteredBy(userConverter.patientDTO.getEnteredBy());
		patient.setFileNo(patientDTO.getFileNo());
		patient.setGender(patientDTO.getGender());
		patient.setInstitutionsFileNo(patientDTO.getInstitutionsFileNo());
		patient.setPatientId(patientDTO.getPatientId());
		patient.setPatientGuardianName(patientDTO.getPatientName());
		patient.setProvince(patientDTO.getProvince());
		patient.setServiceType(patientDTO.getServiceType());
		patient.setZip(patientDTO.getZip());
		Set<Institution> institutions = new HashSet<Institution>(); 
		
		try {
			patient.setEnteredBy(userRepository.findById(patientDTO.getEnteredByUserId()).get());
			patient.setUser(userRepository.findById(patientDTO.getUserId()).get());
			institutionRepository.findAllById(patientDTO.getCenterId()).forEach(institutions :: add);
			patient.setInstitution(institutions);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return patient;
	}
	
	
	
}
