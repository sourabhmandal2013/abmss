package org.psl.abmss.application.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class ResetPasswordDTO {
	
	@NotBlank
    @Size(min = 4, max = 60)
    private String logonId;
    @NotBlank
    @Size(min = 6, max = 20)
    private String newPassword;
    @NotBlank
    @Size(min = 10, max = 10)
    private String mobileNumber;
	public String getLogonId() {
		return logonId;
	}
	public void setLogonId(String logonId) {
		this.logonId = logonId;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	@Override
	public String toString() {
		return "ResetPasswordDTO [logonId=" + logonId + ", newPassword=" + newPassword + ", mobileNumber="
				+ mobileNumber + "]";
	}
     
	
	
    
    
	
}
