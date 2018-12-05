package org.psl.abmss.application.api;

import java.util.List;

import org.psl.abmss.application.dto.DoctorDTO;
import org.psl.abmss.application.entity.Doctor;
import org.psl.abmss.application.entity.Patient;
import org.psl.abmss.application.service.DoctorService;
import org.psl.abmss.application.utility.DoctorConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/abmss/doctor")
public class DoctorAPI {

	@Autowired
	private DoctorService doctorService;
	
	@Autowired
	private DoctorConverter converterDoctor;
	
	@RequestMapping(value = "/{docId}", method = {RequestMethod.GET})
    public Doctor getDoctorById(@PathVariable(value = "docId") final Integer id)
    {
		return doctorService.getDoctorById(id);
    }
	
	@RequestMapping(value = "/center/{centerId}", method = {RequestMethod.GET})
    public List<Doctor> getDoctorByCenterId(@PathVariable(value = "centerId") final Integer center)
    {
		return doctorService.getDoctorsByCenter(center);
    }

	@RequestMapping(value = "/name/{docName}", method = {RequestMethod.GET})
    public List<Doctor> getDoctorByName(@PathVariable(value = "docName") final String name)
    {
		return doctorService.getDoctorsByName(name);
    }

	@RequestMapping(value = "/all", method = {RequestMethod.GET})
    public List<Doctor> getAllDoctors()
    {
		return doctorService.getAllDoctors();
    }
	
	@RequestMapping(value = "/allPatients/{docId}", method = {RequestMethod.GET})
    public List<Patient> getAllPatientsForDoctor(
    		@PathVariable(value = "docId") final Integer id
    		)
    {
		return doctorService.getPatientForDoctor(id);
    }
	
	@RequestMapping(value = "/add", method = {RequestMethod.POST})
    public boolean addDoctor(
    		@RequestBody DoctorDTO dto
    		)
    {
		Doctor doctor = converterDoctor.dtoToDoctor(dto);
		return doctorService.addDoctor(doctor);
    }
	@RequestMapping(value = "/{docId}", method = {RequestMethod.PUT})
    public boolean getDoctorById(
    		@PathVariable(value = "docId") final Integer id,
    		@RequestBody DoctorDTO dto
    		)
    {
		dto.setDocId(id);
		Doctor doctor = converterDoctor.dtoToDoctor(dto);
		return doctorService.addDoctor(doctor);
    }
	@RequestMapping(value = "/{docId}", method = {RequestMethod.DELETE})
    public boolean deleteDoctorById(
    		@PathVariable(value = "docId") final Integer id)
    {
		return doctorService.deleteDoctor(id);
    }
}
