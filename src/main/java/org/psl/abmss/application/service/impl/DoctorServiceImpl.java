package org.psl.abmss.application.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.psl.abmss.application.entity.Doctor;
import org.psl.abmss.application.entity.Patient;
import org.psl.abmss.application.repositories.DoctorRepository;
import org.psl.abmss.application.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorServiceImpl implements DoctorService{

	@Autowired
	DoctorRepository doctorRepository;
	
	@Override
	public Doctor getDoctorById(Integer doctorId) {
		try {
			Doctor doctor = doctorRepository.findById(doctorId).get();
			return doctor;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}

	@Override
	public List<Doctor> getAllDoctors() {
		try {
			List<Doctor> doctors = new ArrayList<Doctor>();
			doctorRepository.findAll().forEach(doctors :: add);
			return doctors;
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public List<Doctor> getDoctorsByName(String name) {
		try {
			List<Doctor> doctors = new ArrayList<Doctor>();
			doctorRepository.findAllByDocName(name).forEach(doctors :: add);
			return doctors;
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public List<Doctor> getDoctorsByCenter(Integer center) {
		try {
			List<Doctor> doctors = new ArrayList<Doctor>();
			doctorRepository.findAllByDocCenter(center).forEach(doctors :: add);
			return doctors;
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public boolean addDoctor(Doctor doctor) {
		try {
			doctorRepository.save(doctor);
			return true;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return false;
	}

	@Override
	public Doctor updateDoctor(Doctor doctor) {
		try {
			doctorRepository.save(doctor);
			return doctorRepository.findById(doctor.getDocId()).get();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}

	@Override
	public boolean deleteDoctor(Integer doctorId) {
		try {
			doctorRepository.deleteById(doctorId);
			return true;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return false;
	}

	@Override
	public List<Patient> getPatientForDoctor(Integer doctorId) {
		try {
			Doctor doctor = new Doctor();
			doctor = doctorRepository.findById(doctorId).get();
			List<Patient> patients = doctor.getPatients();
			return patients;
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}

	
}
