package org.psl.abmss.application.dto;

public class SPTDTO {
	
	private Integer speechTherapyId;
	private Integer patientId;
	private Integer addedBy;
	private String trtmtStartDt;
	private String trtmtBookedDt;
	private String treatingPerson;
	private boolean complete;
	
	public Integer getSpeechTherapyId() {
		return speechTherapyId;
	}
	public void setSpeechTherapyId(Integer speechTherapyId) {
		this.speechTherapyId = speechTherapyId;
	}
	public Integer getPatientId() {
		return patientId;
	}
	public void setPatientId(Integer patientId) {
		this.patientId = patientId;
	}
	public Integer getAddedBy() {
		return addedBy;
	}
	public void setAddedBy(Integer addedBy) {
		this.addedBy = addedBy;
	}
	public String getTrtmtStartDt() {
		return trtmtStartDt;
	}
	public void setTrtmtStartDt(String trtmtStartDt) {
		this.trtmtStartDt = trtmtStartDt;
	}
	public String getTrtmtBookedDt() {
		return trtmtBookedDt;
	}
	public void setTrtmtBookedDt(String trtmtBookedDt) {
		this.trtmtBookedDt = trtmtBookedDt;
	}
	public String getTreatingPerson() {
		return treatingPerson;
	}
	public void setTreatingPerson(String treatingPerson) {
		this.treatingPerson = treatingPerson;
	}
	public boolean isComplete() {
		return complete;
	}
	public void setComplete(boolean complete) {
		this.complete = complete;
	}
}
