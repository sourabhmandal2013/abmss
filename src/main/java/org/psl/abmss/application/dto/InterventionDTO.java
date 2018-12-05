package org.psl.abmss.application.dto;

import java.util.Date;
import java.util.Set;

public class InterventionDTO {
	private Integer patientId;
	private Integer intrvId;
	private Integer intrvType;
	private Integer enteredBy;
	private Date admisionDt;
	private Date intvDt;
	private Date dischrgDt;
	private Integer patientHt;
	private Integer patientWght;
	private String anasthNm;
	private String anasthMethod;
	private String operationType;
	private String complicationInfo;
	private String treatmentComments;
	private Integer intvBookStatus;
	private Integer srvcId;
//	private Set<DoctorDTO> doctorDTOList;
	private Set<Integer> doctorId;
	
	/*
	public Set<DoctorDTO> getDoctorDTOList() {
		return doctorDTOList;
	}
	public void setDoctorDTOList(Set<DoctorDTO> doctorDTOList) {
		this.doctorDTOList = doctorDTOList;
	}
	*/public Integer getPatientId() {
		return patientId;
	}
	public void setPatientId(Integer patientId) {
		this.patientId = patientId;
	}
	public Integer getIntrvId() {
		return intrvId;
	}
	public void setIntrvId(Integer intrvId) {
		this.intrvId = intrvId;
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
	public Integer getIntrvType() {
		return intrvType;
	}
	public void setIntrvType(Integer intrvType) {
		this.intrvType = intrvType;
	}
	public Set<Integer> getDoctorId() {
		return doctorId;
	}
	public void setDoctorId(Set<Integer> doctorId) {
		this.doctorId = doctorId;
	}
	
	
}
