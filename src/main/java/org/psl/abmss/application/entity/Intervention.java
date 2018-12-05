package org.psl.abmss.application.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

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
@Table(name = "INTERVENTION")
public class Intervention {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "INTERVENTION_ID")
	private Integer intrvId;

	@Column(name = "INTERVENTION_TYPE")
	private Integer intrvType;

	@Column(name = "PATIENT_ID")
	private Integer patientId;

	@Column(name = "ENTERED_BY")
	private Integer enteredBy;

	@Column(name = "ADMISSION_DATE")
	private Date admisionDt;

	@Column(name = "INTERVENTION_DATE")
	private Date intvDt;

	@Column(name = "DISCHARGE_DATE")
	private Date dischrgDt;

	@Column(name = "PATIENT_HEIGHT")
	private Integer patientHt;

	@Column(name = "PATIENT_WEIGHT")
	private Integer patientWght;

	@OneToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "INTERVENTION_DOCTORS", joinColumns = @JoinColumn(name = "DOCTOR_ID"), inverseJoinColumns = @JoinColumn(name = "PATIENT_ID"))
	Set<Doctor> doctors = new HashSet<Doctor>();

	@Column(name = "ANAESTHETIST_NAME")
	private String anasthNm;

	@Column(name = "ANAESTHETIST_METHOD")
	private String anasthMethod;

	@Column(name = "OPERATION_TYPE")
	private String operationType;

	@Column(name = "COMPLICATION_INFO")
	private String complicationInfo;

	@Column(name = "TREATMENT_COMMENTS")
	private String treatmentComments;

	@Column(name = "INTERVENTION_BOOK_STATUS")
	private Integer intvBookStatus;

	@Column(name = "SERVICE_ID")
	private Integer srvcId;

	public Integer getIntrvId() {
		return intrvId;
	}

	public void setIntrvId(Integer intrvId) {
		this.intrvId = intrvId;
	}

	public Integer getIntrvType() {
		return intrvType;
	}

	public void setIntrvType(Integer intrvType) {
		this.intrvType = intrvType;
	}

	public Integer getPatientId() {
		return patientId;
	}

	public void setPatientId(Integer patientId) {
		this.patientId = patientId;
	}

	public Integer getEnteredBy() {
		return enteredBy;
	}

	public void setEnteredBy(Integer enteredBy) {
		this.enteredBy = enteredBy;
	}

	public Date getAdmisionDt() {
		return admisionDt;
	}

	public void setAdmisionDt(Date admisionDt) {
		this.admisionDt = admisionDt;
	}

	public Date getIntvDt() {
		return intvDt;
	}

	public void setIntvDt(Date intvDt) {
		this.intvDt = intvDt;
	}

	public Date getDischrgDt() {
		return dischrgDt;
	}

	public void setDischrgDt(Date dischrgDt) {
		this.dischrgDt = dischrgDt;
	}

	public Integer getPatientHt() {
		return patientHt;
	}

	public void setPatientHt(Integer patientHt) {
		this.patientHt = patientHt;
	}

	public Integer getPatientWght() {
		return patientWght;
	}

	public void setPatientWght(Integer patientWght) {
		this.patientWght = patientWght;
	}
	/*
	 * public String getDoctorId() { return doctorId; }
	 * 
	 * public void setDoctorId(String doctorId) { this.doctorId = doctorId; }
	 * 
	 * public String getDoctorNm() { return doctorNm; }
	 * 
	 * public void setDoctorNm(String doctorNm) { this.doctorNm = doctorNm; }
	 */

	public String getAnasthNm() {
		return anasthNm;
	}

	public void setAnasthNm(String anasthNm) {
		this.anasthNm = anasthNm;
	}

	public String getAnasthMethod() {
		return anasthMethod;
	}

	public void setAnasthMethod(String anasthMethod) {
		this.anasthMethod = anasthMethod;
	}

	public String getOperationType() {
		return operationType;
	}

	public void setOperationType(String operationType) {
		this.operationType = operationType;
	}

	public String getComplicationInfo() {
		return complicationInfo;
	}

	public void setComplicationInfo(String complicationInfo) {
		this.complicationInfo = complicationInfo;
	}

	public String getTreatmentComments() {
		return treatmentComments;
	}

	public void setTreatmentComments(String treatmentComments) {
		this.treatmentComments = treatmentComments;
	}

	public Integer getIntvBookStatus() {
		return intvBookStatus;
	}

	public void setIntvBookStatus(Integer intvBookStatus) {
		this.intvBookStatus = intvBookStatus;
	}

	public Integer getSrvcId() {
		return srvcId;
	}

	public void setSrvcId(Integer srvcId) {
		this.srvcId = srvcId;
	}

	public Set<Doctor> getDoctors() {
		return doctors;
	}

	public void setDoctors(Set<Doctor> doctors) {
		this.doctors = doctors;
	}

}
