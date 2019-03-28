package org.psl.abmss.application.service;

import java.util.List;

import org.psl.abmss.application.entity.Doctor;
import org.psl.abmss.application.entity.Patient;

public interface DoctorService {
	public Doctor getDoctorById(Integer doctorId);
	
	public List<Doctor> getAllDoctors();
	
	public List<Doctor> getDoctorsByName(String name);
	
	public List<Doctor> getDoctorsByCenter(Integer center);
	
	public boolean addDoctor(Doctor doctor);
	
	public Doctor updateDoctor(Doctor doctor);
	
	public boolean deleteDoctor(Integer doctorId);

	public List<Patient> getPatientForDoctor(Integer doctorId);

	public Long getDoctorCount();
	
	
}
