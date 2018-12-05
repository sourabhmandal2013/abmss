package org.psl.abmss.application.utility;

import org.psl.abmss.application.dto.TransportationDTO;
import org.psl.abmss.application.entity.Transportation;
import org.springframework.stereotype.Component;

@Component
public class TransportationConverter {
	public Transportation dtoToTransportation(TransportationDTO dto) {
		
		Transportation transportation = new Transportation();
		
		transportation.setAddedby(dto.getAddedBy());
		transportation.setDistance(dto.getDistance());
		transportation.setPatient_id(dto.getPatientId());
		transportation.setTrans_id(dto.getTransId());
		transportation.setTrans_to_centre_dt(dto.getTransToCentreDt());
		transportation.setTrans_to_home_dt(dto.getTransToHomeDt());
		
		return transportation;
	}
}
