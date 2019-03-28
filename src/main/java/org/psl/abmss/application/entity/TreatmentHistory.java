package org.psl.abmss.application.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "TREATMENTHISTORY")
public class TreatmentHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "TREATMENT_HISTORY_ID")
	private Integer treatmentId;
	
	@Column(name = "PATIENT_ID", unique = true)
	@NotNull
	private Integer patientId;

	@Column(name = "FILE_NO")
	private String fileNo;

	@Column(name = "GENDER")
	private String gender;

	@Column(name = "CHILD_NAME")
	private String childName;

	@Column(name = "DOB")
	private Date dob;

	@OneToMany
	List<Intervention> singleIntervention = new ArrayList<Intervention>();
	@OneToMany
	List<Intervention> doubleIntervention = new ArrayList<Intervention>();
	@OneToMany
	List<Transportation> transport = new ArrayList<Transportation>();
	@OneToMany
	List<ENT> ent = new ArrayList<ENT>();
	@OneToMany
	List<SpeechTherapy> speechTherapy = new ArrayList<SpeechTherapy>();
	@OneToMany
	List<Orthodontic> orthodonticTherapy = new ArrayList<Orthodontic>();
	
	
	public Integer getPatientId() {
		return patientId;
	}
	public void setPatientId(Integer patientId) {
		this.patientId = patientId;
	}
	public String getFileNo() {
		return fileNo;
	}
	public void setFileNo(String fileNo) {
		this.fileNo = fileNo;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getchildName() {
		return childName;
	}
	public void setchildName(String childName) {
		this.childName = childName;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public List<Intervention> getSingleIntervention() {
		return singleIntervention;
	}
	public void setSingleIntervention(List<Intervention> singleIntervention) {
		this.singleIntervention = singleIntervention;
	}
	public List<Intervention> getDoubleIntervention() {
		return doubleIntervention;
	}
	public void setDoubleIntervention(List<Intervention> doubleIntervention) {
		this.doubleIntervention = doubleIntervention;
	}
	public List<Transportation> getTransport() {
		return transport;
	}
	public void setTransport(List<Transportation> transport) {
		this.transport = transport;
	}
	public List<ENT> getEnt() {
		return ent;
	}
	public void setEnt(List<ENT> ent) {
		this.ent = ent;
	}
	public List<SpeechTherapy> getSpeechTherapy() {
		return speechTherapy;
	}
	public void setSpeechTherapy(List<SpeechTherapy> speechTherapy) {
		this.speechTherapy = speechTherapy;
	}
	public List<Orthodontic> getOrthodonticTherapy() {
		return orthodonticTherapy;
	}
	public void setOrthodonticTherapy(List<Orthodontic> orthodonticTherapy) {
		this.orthodonticTherapy = orthodonticTherapy;
	}
	public Integer getTreatmentId() {
		return treatmentId;
	}
	public void setTreatmentId(Integer treatmentId) {
		this.treatmentId = treatmentId;
	}
}
