package org.psl.abmss.application.service.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.psl.abmss.application.entity.Intervention;
import org.psl.abmss.application.entity.Patient;
import org.psl.abmss.application.repositories.InterventionRepository;
import org.psl.abmss.application.repositories.PatientRepository;
import org.psl.abmss.application.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientServiceImpl implements PatientService {

	@Autowired
	private PatientRepository patientRepository;

	@Autowired
	private InterventionRepository interventionRepository;
	
	@Override
	public Patient getPatient(Integer childId) {
		try {
			Patient patient = patientRepository.findById(childId).get();
			return patient;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}

	@Override
	public boolean addPatient(Patient patient) {
		
		try {
			patientRepository.save(patient);
			return true;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return false;
	}

	@Override
	public Patient updatePatient(Patient patient) {
		
		try {
			patientRepository.save(patient);
			patient = patientRepository.findById(patient.getPatientId()).get();
			return patient;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}

	@Override
	public boolean deletePatient(Integer childId) {
		try {
			patientRepository.deleteById(childId);
			return true;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return false;
	}

	@Override
	public List<Patient> getAllPatients() {
		try {
			List<Patient> patientsList = new ArrayList<>();
			patientRepository.findAll().forEach(patientsList :: add);
			return patientsList;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}

	@Override
	public List<Patient> getPatientsForToday() {
		try {
			Date today = new Date();
			List<Intervention> interV = new ArrayList<>();
			interventionRepository.findAllByIntvDt(today).forEach(interV :: add);
			List<Patient> patientsList = new ArrayList<>();
			List<Integer> ids = new ArrayList<>();
			for (Intervention intervention : interV) {
				//patientRepository.findById(intervention.getPatientId())
				 ids.add(intervention.getPatientId());
			}
			patientRepository.findAllById(ids).forEach(patientsList :: add);
			
			return patientsList;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}

	@Override
	public List<Patient> getPatientsForAfterSevenDays() {
		try {
			
			Calendar c = Calendar.getInstance();
	        c.setTime(new Date());
	        c.add(Calendar.DATE, 7);
	        Date todayPlusSeven = c.getTime();
			
			List<Intervention> interV = new ArrayList<>();
			interventionRepository.findAllByIntvDt(todayPlusSeven).forEach(interV :: add);
			List<Patient> patientsList = new ArrayList<>();
			List<Integer> ids = new ArrayList<>();
			for (Intervention intervention : interV) {
				ids.add(intervention.getPatientId());
			}
			patientRepository.findAllById(ids).forEach(patientsList :: add);
			
			return patientsList;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}

	@Override
	public Long getPatientCount() {
		try {
			return patientRepository.count();
		}catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	} 
	
	
}
