package org.psl.abmss.application.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.psl.abmss.application.entity.Transportation;
import org.psl.abmss.application.repositories.TransportationRepository;
import org.psl.abmss.application.service.TransportationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransportationServiceImpl implements TransportationService {

	@Autowired
	TransportationRepository transportationRepository;
	
	@Override
	public Transportation getTransportationByChildId(Integer childId) {
		
		Transportation transportation = transportationRepository.findByPatientId(childId);
		return transportation;
	}

	@Override
	public Transportation getTransportationByTransportationId(Integer transportationId) {
		
		Transportation transportation = transportationRepository.findByTransId(transportationId);
		return transportation;
	}

	@Override
	public boolean addTransportation(Transportation transportation) {
		boolean flag = transportationRepository.save(transportation) != null;
		return flag;
	}

	@Override
	public Transportation updateTransportation(Transportation transportation) {
		return transportationRepository.save(transportation);
	}

	@Override
	public boolean deleteTransportation(Integer transportationId) {
		try {
			transportationRepository.deleteById(transportationId);
			return true;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return false;
	}

	@Override
	public List<Transportation> getAllTransportation() {
		try {
			List<Transportation> transportationList = new ArrayList<>();
			transportationRepository.findAll().forEach(transportationList :: add);
			return transportationList;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}

}
