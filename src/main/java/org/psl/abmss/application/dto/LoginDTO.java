package org.psl.abmss.application.dto;

public class LoginDTO {

	private String logonId;
	private String password;
	
	
	public String getLogonId() {
		return logonId;
	}
	public String getPassword() {
		return password;
	}
	public void setLogonId(String logonId) {
		this.logonId = logonId;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "LoginDTO [logonId=" + logonId + ", password=" + password + "]";
	}
	
	
	
}
