package org.psl.abmss.application.utility;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.psl.abmss.application.dto.ORTDTO;
import org.psl.abmss.application.entity.Orthodontic;
import org.springframework.stereotype.Component;

@Component
public class ORTConverter {
	public Orthodontic dtoToORT(ORTDTO dto) {
		
		
		Orthodontic orthodontic = new Orthodontic();
		try {
			orthodontic.setTrtmtBookedDt(new SimpleDateFormat("dd-MM-yyyy").parse(dto.getTrtmtBookedDt()));
			orthodontic.setTrtmtStartDt(new SimpleDateFormat("dd-MM-yyyy").parse(dto.getTrtmtStartDt()));
		} catch (ParseException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		orthodontic.setOrthodonticTrtmntId(dto.getOrthodonticTrtmntId());
		orthodontic.setPatientId(dto.getPatientId());
		orthodontic.setAddedBy(dto.getAddedBy());
		orthodontic.setComplete(dto.isComplete());
		orthodontic.setTreatingPerson(dto.getTreatingPerson());
		return orthodontic;
	}
}
