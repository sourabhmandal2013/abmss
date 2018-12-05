package org.psl.abmss.application.utility;

import org.psl.abmss.application.dto.ORTDTO;
import org.psl.abmss.application.entity.Orthodontic;
import org.springframework.stereotype.Component;

@Component
public class ORTConverter {
	public Orthodontic dtoToORT(ORTDTO dto) {
		
		Orthodontic orthodontic = new Orthodontic();
		orthodontic.setOrthodonticTrtmntId(dto.getOrthodonticTrtmntId());
		orthodontic.setPatientId(dto.getPatientId());
		orthodontic.setAddedBy(dto.getAddedBy());
		orthodontic.setComplete(dto.isComplete());
		orthodontic.setTreatingPerson(dto.getTreatingPerson());
		orthodontic.setTrtmtBookedDt(dto.getTrtmtBookedDt());
		orthodontic.setTrtmtStartDt(dto.getTrtmtStartDt());
		return orthodontic;
	}
}
