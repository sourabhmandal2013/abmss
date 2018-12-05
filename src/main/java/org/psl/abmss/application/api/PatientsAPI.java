package org.psl.abmss.application.api;

import java.util.List;

import org.psl.abmss.application.dto.PatientDTO;
import org.psl.abmss.application.entity.Patient;
import org.psl.abmss.application.service.PatientService;
import org.psl.abmss.application.utility.PatientConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/abmss/patient")
public class PatientsAPI {
	
	@Autowired
	private PatientService patientService;
	

	@Autowired
	private PatientConverter converterPatient;
	
	
	@RequestMapping(value = "/{childId}", method = {RequestMethod.GET})
    public Patient getChild(@PathVariable(value = "childId") final Integer id)
    {
		return patientService.getPatient(id);
    }
	
	@RequestMapping(value = "/all", method = {RequestMethod.GET})
    public List<Patient> getAllChilds()
    {
		return patientService.getAllPatients();
    }
	
	@RequestMapping(value = "/{childId}", method = {RequestMethod.DELETE})
    public boolean deleteChild(@PathVariable(value = "childId") final Integer id)
    {
		return patientService.deletePatient(id);
    }
	
	@RequestMapping(value = "/{childId}", method = {RequestMethod.PUT})
    public Patient updateChild(
    		@PathVariable(value = "childId") final Integer id,
    		@RequestBody PatientDTO patientDTO)
    {
		patientDTO.setPatientId(id);
		Patient patient = converterPatient.dtoToPatient(patientDTO);
		return patientService.updatePatient(patient);
    }
	

	@RequestMapping(value = "/add", method = {RequestMethod.POST})
    public boolean addChild(
    		@RequestBody PatientDTO patientDTO)
    {
		Patient patient = converterPatient.dtoToPatient(patientDTO);
		return patientService.addPatient(patient);
    }
}
