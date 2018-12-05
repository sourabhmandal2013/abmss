package org.psl.abmss.application.service;

import java.util.List;

import org.psl.abmss.application.entity.Patient;

public interface PatientService {

	public Patient getPatient(Integer childId);
	
	public boolean addPatient(Patient patient);
	
	public Patient updatePatient(Patient patient);
	
	public boolean deletePatient(Integer childId);
	
	public List<Patient> getAllPatients();
	
	public List<Patient> getPatientsForToday();
	
	public List<Patient> getPatientsForAfterSevenDays();
	
	
}
