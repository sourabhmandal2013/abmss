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
		patient.setPrimary_contact_no(patientDTO.getPrimary_contact_no());
		patient.setAlt_con_no_1(patientDTO.getAlt_con_no_1());
		patient.setAlt_con_no_2(patientDTO.getAlt_con_no_2());
		patient.setChildDob(patientDTO.getChildDob());
		patient.setChildName(patientDTO.getChildName());
		patient.setCityState(patientDTO.getCityState());
		patient.setEmail_id(patientDTO.getEmail_id());
		patient.setGender(patientDTO.getGender());
		patient.setInstitutionsFileNo(patientDTO.getInstitutionsFileNo());
		patient.setPatientId(patientDTO.getPatientId());
		patient.setPatientGuardianName(patientDTO.getPatientName());
		Set<Institution> institutions = new HashSet<Institution>(); 
		try {
			
			patient.setEnteredBy(userRepository.findById(Integer.valueOf(patientDTO.getEnteredByUserId())).get());
			System.err.println(patient.getEnteredBy());
			patient.setUser(userRepository.findById(patientDTO.getUserId()).get());
			System.err.println(patient.getUser().toString());
//			institutionRepository.findAllById(patientDTO.getCenterId()).forEach(institutions :: add);
			institutions.add(institutionRepository.findByInstitutionId(patientDTO.getChildBelongsToInstitution()));
			patient.setInstitution(institutions);
			System.err.println(patient.getInstitution().toString());
			System.err.println(patient.toString());
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
			System.err.println(e.getStackTrace());
		}
		return patient;
	}
	
	
	
}
