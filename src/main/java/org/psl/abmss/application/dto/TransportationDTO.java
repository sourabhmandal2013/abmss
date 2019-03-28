package org.psl.abmss.application.dto;

public class TransportationDTO {
	
	private Integer transId;
	private Integer patientId;
	private Integer addedBy;
	private String transToCentreDt;
	private String transToHomeDt;
	private String distance;
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
	public String getTransToCentreDt() {
		return transToCentreDt;
	}
	public void setTransToCentreDt(String transToCentreDt) {
		this.transToCentreDt = transToCentreDt;
	}
	public String getTransToHomeDt() {
		return transToHomeDt;
	}
	public void setTransToHomeDt(String transToHomeDt) {
		this.transToHomeDt = transToHomeDt;
	}
	public String getDistance() {
		return distance;
	}
	public void setDistance(String distance) {
		this.distance = distance;
	}

	
}
