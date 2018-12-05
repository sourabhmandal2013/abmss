package org.psl.abmss.application.api;

import java.util.List;

import org.psl.abmss.application.dto.InstitutionDTO;
import org.psl.abmss.application.entity.Institution;
import org.psl.abmss.application.service.InstitutionService;
import org.psl.abmss.application.utility.InstitutionConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/abmss/institution")
public class InstitutionAPI {
	@Autowired
	private InstitutionService institutionService;
	
	@Autowired
	private InstitutionConverter converterInstitution;
	
	@RequestMapping(value = "/{institutionId}", method = {RequestMethod.GET})
    public Institution getInstitutionByInstitutionId(@PathVariable(value = "institutionId") final Integer id)
    {
		return institutionService.getInstitutionByInstitutionId(id);
    }
	
	@RequestMapping(value = "/{city}", method = {RequestMethod.GET})
    public List<Institution> getInstitutionByCity(@PathVariable(value = "city") final String city)
    {
		return institutionService.getinstitutionByCity(city);
    }
	
	@RequestMapping(value = "/all", method = {RequestMethod.GET})
    public List<Institution> getAllTransportation()
    {
		return institutionService.getAllInstitution();
    }
	
	@RequestMapping(value = "/{institutionId}", method = {RequestMethod.DELETE})
    public boolean deleteChildTransportation(@PathVariable(value = "institutionId") final Integer id)
    {
		return institutionService.deleteInstitution(id);
    }
	
	@RequestMapping(value = "/{institutionId}", method = {RequestMethod.PUT})
    public Institution updateInstitution(
    		@PathVariable(value = "institutionId") final Integer id,
    		@RequestBody InstitutionDTO dto)
    {
		dto.setInstitutionId(id);
		Institution institution = converterInstitution.dtoToInstitution(dto);
		return institutionService.updateInstitution(institution);
    }
	

	@RequestMapping(value = "/add", method = {RequestMethod.POST})
    public boolean addInstitution(
    		@RequestBody InstitutionDTO dto)
    {
		Institution institution = converterInstitution.dtoToInstitution(dto);
		return institutionService.addInstitution(institution);
    }
}
