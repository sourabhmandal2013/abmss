package org.psl.abmss.application.utility;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

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
		
		try {
			intervention.setAdmisionDt(new SimpleDateFormat("dd-MM-yyyy").parse(dto.getAdmisionDt()));
			intervention.setDischrgDt(new SimpleDateFormat("dd-MM-yyyy").parse(dto.getDischrgDt()));
			intervention.setIntvDt(new SimpleDateFormat("dd-MM-yyyy").parse(dto.getIntvDt()));
		} catch (ParseException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		intervention.setAnasthMethod(dto.getAnasthMethod());
		intervention.setAnasthNm(dto.getAnasthNm());
		intervention.setComplicationInfo(dto.getComplicationInfo());
		intervention.setEnteredBy(Integer.valueOf(dto.getEnteredBy()));
		intervention.setIntrvId(dto.getIntrvId());
		intervention.setIntrvType(dto.getIntrvType());
		intervention.setIntvBookStatus(dto.getIntvBookStatus());
		intervention.setOperationType(dto.getOperationType());
		intervention.setPatientHt(dto.getPatientHt());
		intervention.setPatientId(dto.getPatientId());
		intervention.setPatientWght(dto.getPatientWght());
		intervention.setSrvcId(dto.getSrvcId());
		/*intervention.setDoctorId(dto.getDoctorId());
		intervention.setDoctorNm(dto.getDoctorNm());*/
		intervention.setTreatmentComments(dto.getTreatmentComments());
		List<Doctor> doctors = new ArrayList<Doctor>();
		try {
			doctors.add(doctorRepository.findById(dto.getDoctorId()).get());
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
