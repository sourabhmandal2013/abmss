package org.psl.abmss.application.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class TreatmentHistoryDTO {
	private Integer patientId;
	private String fileNo;
	private String gender;
	private String firstName;
	private String lastName;
	private Date dob;
	/*List<InterventionDTO> singleIntervention = new ArrayList<InterventionDTO>();
	List<InterventionDTO> doubleIntervention = new ArrayList<InterventionDTO>();
	List<TransportationDTO> transport = new ArrayList<TransportationDTO>();
	List<ENTDTO> ent = new ArrayList<ENTDTO>();*/
	
	List<Integer> singleInterventionIds = new ArrayList<Integer>();
	List<Integer> doubleInterventionIds = new ArrayList<Integer>();
	List<Integer> transportIds = new ArrayList<Integer>();
	List<Integer> entIds = new ArrayList<Integer>();
	List<Integer> speechTherapyIds = new ArrayList<Integer>();
	List<Integer> orthodonticTherapyIds = new ArrayList<Integer>();
	
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
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	/*public List<InterventionDTO> getSingleIntervention() {
		return singleIntervention;
	}
	public void setSingleIntervention(List<InterventionDTO> singleIntervention) {
		this.singleIntervention = singleIntervention;
	}
	public List<InterventionDTO> getDoubleIntervention() {
		return doubleIntervention;
	}
	public void setDoubleIntervention(List<InterventionDTO> doubleIntervention) {
		this.doubleIntervention = doubleIntervention;
	}
	public List<TransportationDTO> getTransport() {
		return transport;
	}
	public void setTransport(List<TransportationDTO> transport) {
		this.transport = transport;
	}
	public List<ENTDTO> getEnt() {
		return ent;
	}
	public void setEnt(List<ENTDTO> ent) {
		this.ent = ent;
	}
	*/
	public List<Integer> getSingleInterventionIds() {
		return singleInterventionIds;
	}
	public void setSingleInterventionIds(List<Integer> singleInterventionIds) {
		this.singleInterventionIds = singleInterventionIds;
	}
	public List<Integer> getDoubleInterventionIds() {
		return doubleInterventionIds;
	}
	public void setDoubleInterventionIds(List<Integer> doubleInterventionIds) {
		this.doubleInterventionIds = doubleInterventionIds;
	}
	public List<Integer> getTransportIds() {
		return transportIds;
	}
	public void setTransportIds(List<Integer> transportIds) {
		this.transportIds = transportIds;
	}
	public List<Integer> getEntIds() {
		return entIds;
	}
	public void setEntIds(List<Integer> entIds) {
		this.entIds = entIds;
	}
	public List<Integer> getSpeechTherapyIds() {
		return speechTherapyIds;
	}
	public void setSpeechTherapyIds(List<Integer> speechTherapyIds) {
		this.speechTherapyIds = speechTherapyIds;
	}
	public List<Integer> getOrthodonticTherapyIds() {
		return orthodonticTherapyIds;
	}
	public void setOrthodonticTherapyIds(List<Integer> orthodonticTherapyIds) {
		this.orthodonticTherapyIds = orthodonticTherapyIds;
	}
	
	
	
}
