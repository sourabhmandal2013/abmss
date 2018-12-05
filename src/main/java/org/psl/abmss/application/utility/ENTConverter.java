package org.psl.abmss.application.utility;

import org.psl.abmss.application.dto.ENTDTO;
import org.psl.abmss.application.entity.ENT;
import org.springframework.stereotype.Component;

@Component
public class ENTConverter {
public ENT dtoToENT(ENTDTO dto) {
		
		ENT ent = new ENT();
		
		ent.setAddedBy(dto.getAddedBy());
		ent.setEntId(dto.getEntId());
		ent.setPatientId(dto.getPatientId());
		ent.setTreatingPerson(dto.getTreatingPerson());
		ent.setTrtmtDt(dto.getTrtmtDt());
		return ent;
	}
}
