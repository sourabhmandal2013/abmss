package org.psl.abmss.application.dto;

import java.util.Date;

public class TransportationDTO {
	
	private Integer transId;
	private Integer patientId;
	private Integer addedBy;
	private Date transToCentreDt;
	private Date transToHomeDt;
	private Double distance;
	public Integer getTransId() {
		return transId;
	}
	public void setTransId(Integer transId) {
		this.transId = transId;
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
	public Date getTransToCentreDt() {
		return transToCentreDt;
	}
	public void setTransToCentreDt(Date transToCentreDt) {
		this.transToCentreDt = transToCentreDt;
	}
	public Date getTransToHomeDt() {
		return transToHomeDt;
	}
	public void setTransToHomeDt(Date transToHomeDt) {
		this.transToHomeDt = transToHomeDt;
	}
	public Double getDistance() {
		return distance;
	}
	public void setDistance(Double distance) {
		this.distance = distance;
	}

	
}
