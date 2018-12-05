package org.psl.abmss.application.dto;

import java.util.Date;

public class ENTDTO {
	private Integer  entId;
	private Integer patientId;
	private Integer addedBy;
	private Date trtmtDt;
	private String treatingPerson;
	public Integer getEntId() {
		return entId;
	}
	public void setEntId(Integer entId) {
		this.entId = entId;
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
	public Date getTrtmtDt() {
		return trtmtDt;
	}
	public void setTrtmtDt(Date trtmtDt) {
		this.trtmtDt = trtmtDt;
	}
	public String getTreatingPerson() {
		return treatingPerson;
	}
	public void setTreatingPerson(String treatingPerson) {
		this.treatingPerson = treatingPerson;
	}
	
}
