package org.psl.abmss.application.api;

import java.util.List;

import org.psl.abmss.application.dto.TransportationDTO;
import org.psl.abmss.application.entity.Transportation;
import org.psl.abmss.application.service.TransportationService;
import org.psl.abmss.application.utility.TransportationConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/abmss/transportation")
public class TransportationAPI {

	
	@Autowired
	private TransportationService transportationService;
	

	@Autowired
	private TransportationConverter converterTransportation;
	
	@RequestMapping(value = "/{childId}", method = {RequestMethod.GET})
    public Transportation getChildTransportationByChildId(@PathVariable(value = "childId") final Integer id)
    {
		return transportationService.getTransportationByChildId(id);
    }
	
	@RequestMapping(value = "/{transportationId}", method = {RequestMethod.GET})
    public Transportation getChildTransportation(@PathVariable(value = "transportationId") final Integer id)
    {
		return transportationService.getTransportationByTransportationId(id);
    }
	
	@RequestMapping(value = "/all", method = {RequestMethod.GET})
    public List<Transportation> getAllTransportation()
    {
		return transportationService.getAllTransportation();
    }
	
	@RequestMapping(value = "/{transportationId}", method = {RequestMethod.DELETE})
    public boolean deleteChildTransportation(@PathVariable(value = "transportationId") final Integer id)
    {
		return transportationService.deleteTransportation(id);
    }
	
	@RequestMapping(value = "/{transportationId}", method = {RequestMethod.PUT})
    public Transportation updateChildTransportation(
    		@PathVariable(value = "transportationId") final Integer id,
    		@RequestBody TransportationDTO transportationDTO)
    {
		Transportation transportation = converterTransportation.dtoToTransportation(transportationDTO);
		return transportationService.updateTransportation(transportation);
    }
	

	@RequestMapping(value = "/add", method = {RequestMethod.POST})
    public boolean addChildTransportation(
    		@RequestBody TransportationDTO transportationDTO)
    {
//		Patient patient = converterPatient.dtoToPatient(patientDTO);
		Transportation transportation = converterTransportation.dtoToTransportation(transportationDTO);
		return transportationService.addTransportation(transportation);
    }
	
}
