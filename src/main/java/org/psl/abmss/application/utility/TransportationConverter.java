package org.psl.abmss.application.utility;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.psl.abmss.application.dto.TransportationDTO;
import org.psl.abmss.application.entity.Transportation;
import org.springframework.stereotype.Component;

@Component
public class TransportationConverter {
	public Transportation dtoToTransportation(TransportationDTO dto) {
		
		Transportation transportation = new Transportation();
		try {
			transportation.setTrans_to_centre_dt(new SimpleDateFormat("dd-MM-yyyy").parse(dto.getTransToCentreDt()));
			transportation.setTrans_to_home_dt(new SimpleDateFormat("dd-MM-yyyy").parse(dto.getTransToHomeDt()));
		} catch (ParseException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		transportation.setAddedby(dto.getAddedBy());
		transportation.setDistance(dto.getDistance());
		transportation.setPatient_id(dto.getPatientId());
		if(dto.getTransId()!=null)
			transportation.setTrans_id(dto.getTransId());

		return transportation;
	}
}
