package org.psl.abmss.application.utility;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.psl.abmss.application.dto.ENTDTO;
import org.psl.abmss.application.entity.ENT;
import org.springframework.stereotype.Component;

@Component
public class ENTConverter {
public ENT dtoToENT(ENTDTO dto) {
		
		ENT ent = new ENT();
		
		try {
			ent.setTrtmtDt(new SimpleDateFormat("dd-MM-yyyy").parse(dto.getTrtmtDt()));
		} catch (ParseException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		ent.setAddedBy(dto.getAddedBy());
		ent.setEntId(dto.getEntId());
		ent.setPatientId(dto.getPatientId());
		ent.setTreatingPerson(dto.getTreatingPerson());
		return ent;
	}
}
