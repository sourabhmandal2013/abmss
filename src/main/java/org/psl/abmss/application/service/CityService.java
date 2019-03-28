package org.psl.abmss.application.service;

import java.util.List;

import org.psl.abmss.application.entity.Cities;
import org.springframework.stereotype.Service;

@Service
public interface CityService {

	public List<Cities> getCityByStateName(String name);
	
	public List<Cities> getCityByCityName(String name);
	
	public List<Cities> getCityAll();
	
	public Cities getCityById(Integer id);
	
}
