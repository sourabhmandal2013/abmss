package org.psl.abmss.application.service;

import java.util.List;

import org.psl.abmss.application.entity.Transportation;

public interface TransportationService {
	public List<Transportation> getTransportationByChildId(Integer childId);

	public Transportation getTransportationByTransportationId(Integer transportationId);

	public boolean addTransportation(Transportation transportation);
	
	public Transportation updateTransportation(Transportation transportation);
	
	public boolean deleteTransportation(Integer transportationId);
	
	public List<Transportation> getAllTransportation();
	
}
