package org.psl.abmss.application.dto;

import java.util.ArrayList;
import java.util.List;

import org.psl.abmss.application.entity.Patient;

public class DoctorDTO {

	private Integer docId;
	private String docName;
	private Integer docPhone1;
	private Integer docPhone2;
	private Integer docCenter;
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
	public Integer getDocPhone1() {
		return docPhone1;
	}
	public void setDocPhone1(Integer docPhone1) {
		this.docPhone1 = docPhone1;
	}
	public Integer getDocPhone2() {
		return docPhone2;
	}
	public void setDocPhone2(Integer docPhone2) {
		this.docPhone2 = docPhone2;
	}
	public Integer getDocCenter() {
		return docCenter;
	}
	public void setDocCenter(Integer docCenter) {
		this.docCenter = docCenter;
	}

}
