package org.psl.abmss.application.utility;

import org.psl.abmss.application.dto.SPTDTO;
import org.psl.abmss.application.entity.SpeechTherapy;
import org.springframework.stereotype.Component;

@Component
public class SPTConverter {
	public SpeechTherapy dtoToSPT(SPTDTO dto) {
		
		SpeechTherapy speechTherapy = new SpeechTherapy();
		
		speechTherapy.setAddedBy(dto.getAddedBy());
		speechTherapy.setComplete(dto.isComplete());
		speechTherapy.setPatientId(dto.getPatientId());
		speechTherapy.setSpeechTherapyId(dto.getSpeechTherapyId());
		speechTherapy.setTreatingPerson(dto.getTreatingPerson());
		speechTherapy.setTrtmtBookedDt(dto.getTrtmtBookedDt());
		speechTherapy.setTrtmtStartDt(dto.getTrtmtStartDt());
		return speechTherapy;
	}
}
