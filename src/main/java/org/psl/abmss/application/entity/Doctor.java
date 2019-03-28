package org.psl.abmss.application.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "DOCTOR")
public class Doctor {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "DOCTOR_ID")
	private Integer docId;

	@Column(name = "DOCTOR_NAME")
	private String docName;

	@Column(name = "DOCTOR_PHONE_1")
	private String docPhone1;

	@Column(name = "DOCTOR_PHONE_2")
	private String docPhone2;

	@Column(name = "DOCTOR_CENTER")
	private Integer docCenter;

	@OneToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "DOCTORS_PATIENTS", joinColumns = @JoinColumn(name = "PATIENT_ID"), inverseJoinColumns = @JoinColumn(name = "DOCTOR_ID"))
	List<Patient> patients = new ArrayList<Patient>();
	
	public List<Patient> getPatients() {
		return patients;
	}

	public void setPatients(List<Patient> patients) {
		this.patients = patients;
	}

	public Integer getDocId() {
		return docId;
	}

	public void setDocId(Integer docId) {
		this.docId = docId;
	}

	public String getDocName() {
		return docName;
	}

	public void setDocName(String docName) {
		this.docName = docName;
	}

	public String getDocPhone1() {
		return docPhone1;
	}

	public void setDocPhone1(String docPhone1) {
		this.docPhone1 = docPhone1;
	}

	public String getDocPhone2() {
		return docPhone2;
	}

	public void setDocPhone2(String docPhone2) {
		this.docPhone2 = docPhone2;
	}

	public Integer getDocCenter() {
		return docCenter;
	}

	public void setDocCenter(Integer docCenter) {
		this.docCenter = docCenter;
	}

}
