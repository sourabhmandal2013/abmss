package org.psl.abmss.application.utility;

import java.util.HashSet;
import java.util.Set;

import org.psl.abmss.application.dto.InterventionDTO;
import org.psl.abmss.application.entity.Doctor;
import org.psl.abmss.application.entity.Intervention;
import org.psl.abmss.application.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class InterventionConverter {
	
	/*@Autowired 
	DoctorConverter doctorConverter;*/
	
	@Autowired
	DoctorRepository doctorRepository;
	
public Intervention dtoToIntervention(InterventionDTO dto) {

		Intervention intervention = new Intervention();
		
		intervention.setAdmisionDt(dto.getAdmisionDt());
		intervention.setAnasthMethod(dto.getAnasthMethod());
		intervention.setAnasthNm(dto.getAnasthNm());
		intervention.setComplicationInfo(dto.getComplicationInfo());
		intervention.setDischrgDt(dto.getDischrgDt());
		intervention.setEnteredBy(dto.getEnteredBy());
		intervention.setIntrvId(dto.getIntrvId());
		intervention.setIntrvType(dto.getIntrvType());
		intervention.setIntvBookStatus(dto.getIntvBookStatus());
		intervention.setIntvDt(dto.getIntvDt());
		intervention.setOperationType(dto.getOperationType());
		intervention.setPatientHt(dto.getPatientHt());
		intervention.setPatientId(dto.getPatientId());
		intervention.setPatientWght(dto.getPatientWght());
		intervention.setSrvcId(dto.getSrvcId());
		/*intervention.setDoctorId(dto.getDoctorId());
		intervention.setDoctorNm(dto.getDoctorNm());*/
		intervention.setTreatmentComments(dto.getTreatmentComments());
		Set<Doctor> doctors = new HashSet<Doctor>();
		try {
			doctorRepository.findAllById(dto.getDoctorId()).forEach(doctors :: add);;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		/*for (DoctorDTO docDTO : dto.getDoctorDTOList()) {
			doctors.add(doctorConverter.dtoToDoctor(docDTO));
		}*/
		intervention.setDoctors(doctors);
		return intervention;
	}
}
