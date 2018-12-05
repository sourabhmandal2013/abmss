package org.psl.abmss.application.dto;

import java.util.Date;

public class ORTDTO {
	private Integer orthodonticTrtmntId;
	private Integer patientId;
	private Integer addedBy;
	private Date trtmtStartDt;
	private Date trtmtBookedDt;
	private String treatingPerson;
	private boolean complete;
	public Integer getOrthodonticTrtmntId() {
		return orthodonticTrtmntId;
	}
	public void setOrthodonticTrtmntId(Integer orthodonticTrtmntId) {
		this.orthodonticTrtmntId = orthodonticTrtmntId;
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
	public Date getTrtmtStartDt() {
		return trtmtStartDt;
	}
	public void setTrtmtStartDt(Date trtmtStartDt) {
		this.trtmtStartDt = trtmtStartDt;
	}
	public Date getTrtmtBookedDt() {
		return trtmtBookedDt;
	}
	public void setTrtmtBookedDt(Date trtmtBookedDt) {
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
