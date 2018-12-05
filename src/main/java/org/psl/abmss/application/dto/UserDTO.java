package org.psl.abmss.application.dto;

public class UserDTO {
	
	private String userName;
	private String userEmail;
	private boolean active;
	private boolean patientId;
	private String appliedRole;
	
	public String getAppliedRole() {
		return appliedRole;
	}
	public void setAppliedRole(String appliedRole) {
		this.appliedRole = appliedRole;
	}
	public boolean isPatientId() {
		return patientId;
	}
	public void setPatientId(boolean patientId) {
		this.patientId = patientId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	
	
}
