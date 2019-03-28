package org.psl.abmss.application.api;

import java.util.List;

import org.psl.abmss.application.entity.Cities;
import org.psl.abmss.application.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("abmss/cities")
public class CitiesAPI {

	
	@Autowired
	CityService cityService; 
	
	@RequestMapping(value = "/all", method = {RequestMethod.GET})
	public List<Cities> getAllCityState()
	{
		return cityService.getCityAll();
	}

	@RequestMapping(value = "/state/{name}", method = {RequestMethod.GET})
    public List<Cities> getCityByStateName(@PathVariable(value = "name") final String name)
    {
		return cityService.getCityByStateName(name);
    }
	
	@RequestMapping(value = "/city/{name}", method = {RequestMethod.GET})
    public List<Cities> getCityByCityName(@PathVariable(value = "name") final String name)
    {
		return cityService.getCityByCityName(name);
    }
	
	@RequestMapping(value = "/id/{id}", method = {RequestMethod.GET})
    public Cities getCityById(@PathVariable(value = "id") final Integer id)
    {
		return cityService.getCityById(id);
    }
	
	
}
