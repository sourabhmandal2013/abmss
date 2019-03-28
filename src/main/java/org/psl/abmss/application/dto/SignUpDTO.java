package org.psl.abmss.application.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignUpDTO {
	@NotBlank
    /*@Size(min = 4, max = 60)*/
    private String userName;

    @NotBlank
//    @Size(max = 40)
    @Email
    private String userEmail;

    @NotBlank
    /*@Size(min = 6, max = 20)*/
    private String userPass;
    
    @NotBlank
//    @Size(min = 10, max = 12)
    private String userPhone;
    
	public String getUserName() {
		return userName;
	}

	public String getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public String getUserPass() {
		return userPass;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public void setUserPass(String userPass) {
		this.userPass = userPass;
	}

	@Override
	public String toString() {
		return "SignUpDTO [userName=" + userName + ", userEmail=" + userEmail + ", userPass=" + userPass
				+ ", userPhone=" + userPhone + "]";
	}
	
	
}
