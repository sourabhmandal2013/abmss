package org.psl.abmss.application.utility;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.psl.abmss.application.dto.SPTDTO;
import org.psl.abmss.application.entity.SpeechTherapy;
import org.springframework.stereotype.Component;

@Component
public class SPTConverter {
	public SpeechTherapy dtoToSPT(SPTDTO dto) {
		
		SpeechTherapy speechTherapy = new SpeechTherapy();
		
		try {
			speechTherapy.setTrtmtBookedDt(new SimpleDateFormat("dd-MM-yyyy").parse(dto.getTrtmtBookedDt()));
			speechTherapy.setTrtmtStartDt(new SimpleDateFormat("dd-MM-yyyy").parse(dto.getTrtmtStartDt()));
		} catch (ParseException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		speechTherapy.setAddedBy(dto.getAddedBy());
		speechTherapy.setComplete(dto.isComplete());
		speechTherapy.setPatientId(dto.getPatientId());
		speechTherapy.setSpeechTherapyId(dto.getSpeechTherapyId());
		speechTherapy.setTreatingPerson(dto.getTreatingPerson());
		
		return speechTherapy;
	}
}
