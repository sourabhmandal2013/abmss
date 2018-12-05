package org.psl.abmss.application.utility;

import org.psl.abmss.application.dto.DoctorDTO;
import org.psl.abmss.application.entity.Doctor;
import org.springframework.stereotype.Component;

@Component
public class DoctorConverter {

public Doctor dtoToDoctor(DoctorDTO dto) {
		
		Doctor doctor = new Doctor();
		
		doctor.setDocId(dto.getDocId());
		doctor.setDocName(dto.getDocName());
		doctor.setDocPhone1(dto.getDocPhone1());
		doctor.setDocPhone2(dto.getDocPhone2());
		doctor.setDocCenter(dto.getDocCenter());
		doctor.setPatients(dto.getPatients());
		
		return doctor;
	}
}
