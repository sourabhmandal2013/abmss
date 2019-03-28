package org.psl.abmss.application.service.impl;

import java.util.List;

import org.psl.abmss.application.entity.Cities;
import org.psl.abmss.application.repositories.CitiesStateRepository;
import org.psl.abmss.application.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CityServiceImpl implements CityService {
	
	@Autowired
	CitiesStateRepository cityStateRepository;

	@Override
	public List<Cities> getCityByStateName(String name) {
		try {
			return cityStateRepository.findAllByCityState(name);
		}catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}

	@Override
	public List<Cities> getCityByCityName(String name) {
		try {
			return cityStateRepository.findAllByCityName(name);
		}catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}
	
	@Override
	public List<Cities> getCityAll() {
		try {
			return (List<Cities>) cityStateRepository.findAll();
		}catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}
	
	@Override
	public Cities getCityById(Integer id) {
		try {
			return cityStateRepository.findByCityId(id);
		}catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}

}
